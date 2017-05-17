var mymodule = (function () {
  
  //// переменные ////
  
  
  
  //// ----------////
  
  // Функция инициализации
  var launchInit = function () {
    _initVars(); // запуск инициализации переменных
    _launchListeners();// запуск прослушки событий  
    
  };
  
  var _initVars = function () {
    // тут инициализируем переменные
    
  };
  
  var _launchListeners = function () {
    // тут пишем код для прослушки событий
    
  };
  
  // другие функции располагаются здесь, до return
  
  
  return {
    init: launchInit
  };
})();

mymodule.init();