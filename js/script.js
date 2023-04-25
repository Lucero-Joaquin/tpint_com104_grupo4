const users_api__list = $('.users-api__list');


const users_github = () => {
    const array_users = [
        {
            'nombre':'Joaquin Lucero',
            'foto':'https://unavatar.io/github/demonjl',
            'url':'https://github.com/demonjl'
        },
        {
            'nombre':'Yonathan Pachado',
            'foto':'https://unavatar.io/github/YPachado99',
            'url':'https://github.com/YPachado99'
        },
        {
            'nombre':'Martin Laurito',
            'foto':'https://unavatar.io/github/Kronix229',
            'url':'https://github.com/Kronix229'
        }
    ]

    array_users.forEach(value=>{
        
        let li = $('<li>').attr('class','api-user__content');
        let div = $('<div>').attr('class','api-user__img');
        let etiqueta_img = $('<img>').attr({'src':`${value.foto}`,'alt':`${value.nombre}`});
        let span_name = $('<span>').attr('class','api-user__name');
        let span_position = $('<span>').attr('class','api-user__position');
        let etiqueta_a = $('<a>').attr({'href':`${value.url}`,'target':'_blank'});

        span_name.text(`${value.nombre}`);
        span_position.text('Owner');

        div.append(etiqueta_img);
        
        etiqueta_a.append(div);
        etiqueta_a.append(span_name);
        etiqueta_a.append(span_position);
        li.append(etiqueta_a);
        users_api__list.append(li);
    })
}
users_github()

const users_list =  fetch('https://reqres.in/api/users?page=1')
                    .then(response=>response.json())
                    .then(data=>users_data(data.data))
                    .catch(err => console.log(err));


const users_data = (data) => {
    data.map(user=>{

        let li = $('<li>').attr('class','api-user__content');
        let div = $('<div>').attr('class','api-user__img');
        let etiqueta_img = $('<img>').attr({'src':`${user.avatar}`,'alt':`${user.first_name} ${user.last_name}`});
        let span_name = $('<span>').attr('class','api-user__name');
        let span_position = $('<span>').attr('class','api-user__position');

        span_name.text(`${user.first_name} ${user.last_name}`);
        span_position.text('Employee');

        div.append(etiqueta_img);
        li.append(div);
        li.append(span_name);
        li.append(span_position);

        users_api__list.append(li);

    });   
}



$(document).on("scroll", () => {
    if($(document).scrollTop() > 300){
        $('.navbar-lado__derecho').css('background-color','white');
    }
    if($(document).scrollTop() < 300){
        $('.navbar-lado__derecho').css('background-color','var(--color-amarillo)');
    }
});