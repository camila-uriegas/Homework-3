$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    // selects HTML elements using '' and sets their inner text .text()
    // with the a value which are on the first lines 
    $('#username').text(username);
    $('.revenue-amt').text(revenueAmt);
    $('#customer-num').text(customerNum);      
    $('#orders-amt').text(ordersAmt);
    $('#issues-amt').text(issuesAmt);
    $('#notification-num').text(notifAmt);

    // it will run three times since there are only 3 sales
    sales.forEach(function (item) {
        var row = "<tr>" +
                    "<td>" + item.product + "</td>" +
                    "<td>" + item.quantity + "</td>" +
                    "<td>" + item.revenue + "</td>" +
                "</tr>";
        $('#salesTableBody').append(row);
    });


    customers.forEach (function (item){
        // this is an if/else to check if its active or pending
        var statusClass = item.status === "Active" ? "status-active" : "status-pending";
        var row = "<tr>" +
                    "<td>" + item.name + "</td>" +
                    "<td>" + item.email + "</td>" +
                    "<td><span class=\"status>" + statusClass + "\">" + item.status + "</span></td>" +
                    "<td>" + item.joined + "</td>" +
                "</tr>";
        $("#customerTableBody").append(row);
    });

    activities.forEach(function (item){
        var listItem = "<li>" + item.message + "</li>";
        $('#activity-list').append(listItem);
    });
       
    messages.forEach(function (item) {
        var listItem = "<li>" + item.messsage + "</li>";
        $('#system-status-list').append(listItem);
    });

    notifications.forEach(function (item) {
        var listItem = "<li>" + item.messsage + "</li>";
        $('#notifications-list').append(listItem);
    });

    tasks.forEach(function (item) {
        var listItem = "<li>" + item.messsage + "</li>";
        $('#tasks-list').append(listItem);
    });

    // selects the button tag and converts them into buttons
    $('button').button();

    // automatically makes the tabs into a dashboard
    $('#dashboardTabs').tabs();

    $('#customerDialog').dialog({
        autoOpen: false,
        modal: true,
        width: 450,
        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();
                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }
                alert("Customer created: " + name);
                $(this).dialog("close");
            },
            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    // converts it into a collapsible accordion
    $('#accordion').accordion({
        collapsible: true,
        heightStyle: "content"
    });

    // when clicking this button it switches to open the customerDialog
    $('#newCustomerButton').on('click', function () {
        $('#customerDialog').dialog('open');
    });

    // its inside the customerDialog and attaches a calendar popup
    $('#customerDate').datepicker();



    });