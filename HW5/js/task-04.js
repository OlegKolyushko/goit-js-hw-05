class StringBuilder {
  constructor(string){
    this._string = [string];
  }
  get value(){
    return this._string.join('');
  }
  append = function(str){
    this._string.push(str);
  }
  prepend = function(str){
    this._string.unshift(str);
  }
  pad = function(str){
    this._string.unshift(str);
    this._string.push(str);
  }
};
const builder = new StringBuilder('.');
console.log(builder.value);
builder.append('^');
console.log(builder.value); // '.^'
builder.prepend('^');
console.log(builder.value); // '^.^'
builder.pad('=');
console.log(builder.value); // '=^.^='