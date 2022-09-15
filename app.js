var bbq = {
    item1Name: "Chicken Boti",
    item1Price: 390,
    item2Name: "Seekh Kabab",
    item2Price: 300,
    item3Name: "Reshmi Kabab",
    item3Price: 450,
    item4Name: "Malai Boti",
    item4Price: 450,
    item5Name: "Bihari Chicken",
    item5Price: 450,
    item6Name: "Gola Kabab",
    item6Price: 380,
    item7Name: "Bihari Boti",
    item7Price: 380,
    item8Name: "Chapli Kabab",
    item8Price: 450,
    item9Name: "Turkish Kabab",
    item9Price: 500,
    item10Name: "Irani Boti",
    item10Price: 450
};

var desi = {
    item1Name: "Chicken Karahi",
    item1Price: 1000,
    item2Name: "Chicken Green Karahi",
    item2Price: 1050,
    item3Name: "Chicken White Karahi",
    item3Price: 1080,
    item4Name: "Chicken Achari Karahi",
    item4Price: 1080,
    item5Name: "Chicken Handi",
    item5Price: 1100,
    item6Name: "Chicken Malai Handi",
    item6Price: 1150,
    item7Name: "Mutton Karahi",
    item7Price: 1650,
    item8Name: "Mutton Green Karahi",
    item8Price: 1700,
    item9Name: "Mutton White karahi",
    item9Price: 1750,
    item10Name: "Chicken Boti Masala",
    item10Price: 900
};

var fast = {
    item1Name: "Chicken Burger",
    item1Price: 200,
    item2Name: "Beef Burger",
    item2Price: 230,
    item3Name: "Zinger burger",
    item3Price: 280,
    item4Name: "Zinger Cheese Burger",
    item4Price: 300,
    item5Name: "Double Decker",
    item5Price: 500,
    item6Name: "Chicken Broast",
    item6Price: 280,
    item7Name: "Chicken Sandwich",
    item7Price: 260,
    item8Name: "Pizza(Small)",
    item8Price: 300,
    item9Name: "Pizza(Medium)",
    item9Price: 750,
    item10Name: "Pizza(Large)",
    item10Price: 1000
};
document.querySelector(".menu").style.display = "none";

function showMenu(args) {
    document.querySelector(".menu").style.display = "flex";

    if (args === "1") {
        document.getElementById("item1-name").innerText = bbq.item1Name;
        document.getElementById("item1-price").innerText = bbq.item1Price;
        document.getElementById("item2-name").innerText = bbq.item2Name;
        document.getElementById("item2-price").innerText = bbq.item2Price;
        document.getElementById("item3-name").innerText = bbq.item3Name;
        document.getElementById("item3-price").innerText = bbq.item3Price;
        document.getElementById("item4-name").innerText = bbq.item4Name;
        document.getElementById("item4-price").innerText = bbq.item4Price;
        document.getElementById("item5-name").innerText = bbq.item5Name;
        document.getElementById("item5-price").innerText = bbq.item5Price;
        document.getElementById("item6-name").innerText = bbq.item6Name;
        document.getElementById("item6-price").innerText = bbq.item6Price;
        document.getElementById("item7-name").innerText = bbq.item7Name;
        document.getElementById("item7-price").innerText = bbq.item7Price;
        document.getElementById("item8-name").innerText = bbq.item8Name;
        document.getElementById("item8-price").innerText = bbq.item8Price;
        document.getElementById("item9-name").innerText = bbq.item9Name;
        document.getElementById("item9-price").innerText = bbq.item9Price;
        document.getElementById("item10-name").innerText = bbq.item10Name;
        document.getElementById("item10-price").innerText = bbq.item10Price;
    }

    else if (args === "2") {
        document.getElementById("item1-name").innerText = desi.item1Name;
        document.getElementById("item1-price").innerText = desi.item1Price;
        document.getElementById("item2-name").innerText = desi.item2Name;
        document.getElementById("item2-price").innerText = desi.item2Price;
        document.getElementById("item3-name").innerText = desi.item3Name;
        document.getElementById("item3-price").innerText = desi.item3Price;
        document.getElementById("item4-name").innerText = desi.item4Name;
        document.getElementById("item4-price").innerText = desi.item4Price;
        document.getElementById("item5-name").innerText = desi.item5Name;
        document.getElementById("item5-price").innerText = desi.item5Price;
        document.getElementById("item6-name").innerText = desi.item6Name;
        document.getElementById("item6-price").innerText = desi.item6Price;
        document.getElementById("item7-name").innerText = desi.item7Name;
        document.getElementById("item7-price").innerText = desi.item7Price;
        document.getElementById("item8-name").innerText = desi.item8Name;
        document.getElementById("item8-price").innerText = desi.item8Price;
        document.getElementById("item9-name").innerText = desi.item9Name;
        document.getElementById("item9-price").innerText = desi.item9Price;
        document.getElementById("item10-name").innerText = desi.item10Name;
        document.getElementById("item10-price").innerText = desi.item10Price;
    }

    else if (args === "3") {
        document.getElementById("item1-name").innerText = fast.item1Name;
        document.getElementById("item1-price").innerText = fast.item1Price;
        document.getElementById("item2-name").innerText = fast.item2Name;
        document.getElementById("item2-price").innerText = fast.item2Price;
        document.getElementById("item3-name").innerText = fast.item3Name;
        document.getElementById("item3-price").innerText = fast.item3Price;
        document.getElementById("item4-name").innerText = fast.item4Name;
        document.getElementById("item4-price").innerText = fast.item4Price;
        document.getElementById("item5-name").innerText = fast.item5Name;
        document.getElementById("item5-price").innerText = fast.item5Price;
        document.getElementById("item6-name").innerText = fast.item6Name;
        document.getElementById("item6-price").innerText = fast.item6Price;
        document.getElementById("item7-name").innerText = fast.item7Name;
        document.getElementById("item7-price").innerText = fast.item7Price;
        document.getElementById("item8-name").innerText = fast.item8Name;
        document.getElementById("item8-price").innerText = fast.item8Price;
        document.getElementById("item9-name").innerText = fast.item9Name;
        document.getElementById("item9-price").innerText = fast.item9Price;
        document.getElementById("item10-name").innerText = fast.item10Name;
        document.getElementById("item10-price").innerText = fast.item10Price;
    }
}

function hideMenu() {
    document.querySelector(".menu").style.display = "none";
}