var app = new function(){
    this.el = document.getElementById('countries');


this.countries = ['France', 'Germany', 'England', 'Spain', 'Belgium', 'Italy', 'Portugal', 'Irland', 'Luxembourg'];


this.Count = function(data){
    let el = document.getElementById('counter');
    let name ='country';

    if(data){
        if(data > 1){
            name = 'countries'
        }
        el.innerHTML = data + " " + name;
    }
    else{
        el.innerHTML = "No" + " " + name;
    }
};

this.FetchAll = function(){
    let data = "";

    if(this.countries.length > 0){
        for(let i = 0; i < this.countries.length; i++){     
            data += '<tr>';
            data += '<th>';
            data += i+1;
            data += '</th>';
            data += '<td>' + this.countries[i] + '</td>';
            data += '<td>' + this.countries[i] + '</td>';
            data += '<td> <button class="btn btn-warning my-1" onclick="app.Edit('+i+')">Edit</button> </td> '
        
        
            data += '</tr>';
        }
    }

    this.Count(this.countries.length);
    return this.el.innerHTML = data;
};
this.Add = function(){
    alert('add here');
}

}

this.CloseInput = function(){
    document.getElementById('spoiler').style.display = 'none';
}


app.FetchAll();
