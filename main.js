"use strict";function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}new(function(){function t(e){_classCallCheck(this,t),this.menu=document.querySelector(e),this.itensMenu=_toConsumableArray(this.menu.children),this.html=document.documentElement}return _createClass(t,[{key:"remover",value:function(e){e.preventDefault(),this.itensMenu[0]!==e.target&&this.itensMenu[2]!==e.target&&this.itensMenu[1]!==e.target&&(this.itensMenu.forEach(function(e){e.classList.remove("ativo")}),this.html.removeEventListener("click",this.remover))}},{key:"cliqueFora",value:function(){this.html.addEventListener("click",this.remover)}},{key:"adicionarCadaClasse",value:function(){this.itensMenu.forEach(function(e){e.classList.toggle("ativo")}),this.cliqueFora()}},{key:"adicionarClasseEvento",value:function(){var t=this;this.itensMenu.forEach(function(e){e.addEventListener("click",t.adicionarCadaClasse)})}},{key:"bindItens",value:function(){this.cliqueFora=this.cliqueFora.bind(this),this.adicionarCadaClasse=this.adicionarCadaClasse.bind(this),this.remover=this.remover.bind(this)}},{key:"init",value:function(){return this.bindItens(),this.adicionarClasseEvento(),this}}]),t}())('[data-menu="conteudo"]').init();