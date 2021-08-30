window.addEventListener('load',  function() {
        const createTemplate = ({text = '', color = ''}) => {
           
            const _block = document.createElement('div')
            _block.classList.add('block')
            
            if (text) {
                const _text = document.createElement('p')

                _text.innerText = text
                _block.appendChild(_text)
            }         

            (color == 1) ?  _block.innerHTML = `<a href='https://www.youtube.com/watch?v=Gu25ZloF-pE' target=_blank>Жизнь борьба а ты в ней Конор</a>`  : undefined; 
            // (color == 1) ?  _block.classList.add('red') : undefined;
            return _block
        }       
        
        class Block {
            constructor(text, color) {
                this.text = text;
                this.color = color;
                this.init()
                this.render()
            }
            
            init() {
                this._wrap = document.querySelector('.wrapper')
            }
            
            initTemplate() {
                this.block = createTemplate({text: this.text, color: this.color, })
                
                return this.block
            }
            
            render() {
                this._wrap.appendChild(this.initTemplate())
            }
        }
        
        const names = [
            {name: 'Саня', color: 1},
            {name: 'Федя', color: 0},
            {name: 'Мирко', color: 0},
            {name: 'Хабиб', color: 1},
            {name: 'Макрегер', color: 1},
        ];
        
        // const filterName =  names.filter((person)=>{ return person.color >= 1; });
        // console.log(filterName)
        names.map(name => new Block( name.name, name.color ));
})


// (color == 1) ? console.log('1') : console.log('0');

// 1) в initTemplate() передать параметры, а не createTemplate СУКА!!!
// 2) после того когда все будет работать В createTemplate() поместить в classBlock{}