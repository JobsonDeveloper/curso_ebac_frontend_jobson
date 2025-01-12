$(document).ready(() => { // Inicia quando tudo estiver carregado
    $("#user_form").on("submit", (event) => {
        event.preventDefault();

        let newTask = $("#user_task").val();
        let item = $(`<li class="task_item" style="display: none">${newTask}</li>`);

        $(item).appendTo("#toDo_list");
        $(item).fadeIn(500);
        $("#user_task").val("");
    });

    $("#toDo_list").click((dado) => {
        let item = $(dado.target);
        item.toggleClass("finish_task");
    });
});