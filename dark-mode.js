// 通用暗黑模式功能
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const darkModeText = document.getElementById('darkModeText');
    
    if (!darkModeToggle) return; // 如果页面没有暗黑模式按钮，直接返回
    
    // 检查本地存储的主题设置
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 设置初始主题
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // 切换主题函数
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (darkModeIcon && darkModeText) {
            if (theme === 'dark') {
                darkModeIcon.textContent = '☀️';
                darkModeText.textContent = '浅色模式';
            } else {
                darkModeIcon.textContent = '🌙';
                darkModeText.textContent = '暗黑模式';
            }
        }
    }
    
    // 切换按钮事件
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// 页面加载完成后自动初始化
document.addEventListener('DOMContentLoaded', function() {
    initDarkMode();
});
