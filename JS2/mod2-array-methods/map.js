const m = data.map(
    (user) => `<div class="card card-user">
<img src="${user.avatar}" alt="${user.first_name} ${user.last_name}"> <h2>${user.first_name} ${user.last_name}</h2>
<p>Email: <a href="mailto:${user.email}">${user.email} </a></p>
<p><a href="/user/${user.id}">Подробнее</a></p>
</div>`
)

document.body.innerHTML += m.join('')