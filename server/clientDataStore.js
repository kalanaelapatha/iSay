

class UserStore {

    _data = [];

    constructor(){
        this._data = [];
    }

    add(socket,id){
        this._data.push({
            id: id
        });
    }

    get(){
        // return this._data.find(d => d.id === id);
        return this._data;
    }

    remove(id) {
        this._data = this._data .filter(function (obj) {
            return obj.id !== id;
        });
        console.log("deleted"+this._data)

    }
}

const instance = new UserStore();

module.exports = instance;
