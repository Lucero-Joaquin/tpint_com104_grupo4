const users_api__list = $('.users-api__list');

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