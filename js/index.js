import { macro, micro } from "./tickets.js";

$(()=>{
    console.log(macro);
    const $ticketsList = $('#ticket-list-js');
    console.log($ticketsList);
    $ticketsList.html('')

    let ticketEls = [];

    macro.forEach((ticket, ind) => {
        let $li = $('<li>');
        $li.addClass(['list-group-item', 'bg-dark']);

        let html = `
        <p>
            <a class="" data-bs-toggle="collapse" href="#ticket-${ind}" role="button" aria-expanded="false" aria-controls="ticket-${ind}">
                ${ticket.number} ${ticket.title}
            </a>
        </p>
        <div class="collapse pb-2" id="ticket-${ind}">
            <div class="card card-body">
                ${ticket.html}
            </div>
        </div>
        `;
        $li.html(html);
        ticketEls.push($li);
    });
    $ticketsList.append(ticketEls);
});
