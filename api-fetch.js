const url = "https://reqres.in/api/users?delay=3";

const getUsersUsingAsyncAwait = async (url) => {
    try {
        const resolve = await fetch(url);
        const objetoUsuarios = await resolve.json();
        const arregloUsuarios = objetoUsuarios.data;

        // Limpia cualquier contenido previo en la tabla
        document.getElementById("user-rows").innerHTML = "";

        // Genera las filas de usuarios en la tabla
        arregloUsuarios.forEach(usuario => {
            const row = `
                <tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.first_name}</td>
                    <td>${usuario.last_name}</td>
                    <td>${usuario.email}</td>
                    <td><img src="${usuario.avatar}" alt="Avatar"></td>
                </tr>
            `;
            document.getElementById("user-rows").innerHTML += row;
        });
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        document.getElementById("user-rows").innerHTML = "<tr><td colspan='5'>Error al cargar los usuarios. Por favor, intenta de nuevo más tarde.</td></tr>";
    }
}

getUsersUsingAsyncAwait(url);
