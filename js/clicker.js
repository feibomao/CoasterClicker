/**
 * 
 * Authors: Dennis Qin and Colin Wei
 * Date: 02/27/2026
 * Descr: JavaScript file for index.html
 * 
 */


window.addEventListener("load", function () {
    let ticketCount = 0;
    let clickValue = 1;
    let ticketsPerSecond = 0;
    let ticketsPerTime = 0;
    let clickCount = 0;
    let netTickets = 0;

    tickets = document.getElementById("tickets");
    ticketRate = document.getElementById("ticketsPerSec");
    unit = document.getElementById("unit");

    goldTicket = document.getElementById("goldTicket");
    goldTicket.style.visibility = "hidden";

    /**
     * Autoclicker, runs indefinitely. Ticket count updates every tenth of a second
     * Checks for achievements
     */
    function ticketIntv() {
        ticketCount += ticketsPerTime;
        netTickets += ticketsPerTime;
        displayTickets();
        checkAchievements();
    }
    setInterval(ticketIntv, 100);


    /**
     * Displays ticket count with formatting
     */
    function displayTickets() {
        if (ticketCount >= 1000000000000) {
            ticketCountDisp = Math.floor(ticketCount / 1000000000);
            ticketCountDisp /= 1000
            unit.innerHTML = "T";
        }
        else if (ticketCount >= 1000000000) {
            ticketCountDisp = Math.floor(ticketCount / 1000000);
            ticketCountDisp /= 1000
            unit.innerHTML = "B";
        }
        else if (ticketCount >= 1000000) {
            ticketCountDisp = Math.floor(ticketCount / 1000);
            ticketCountDisp /= 1000
            unit.innerHTML = "M";
        }
        else {
            ticketCountDisp = Math.floor(ticketCount);
            unit.innerHTML = "";
        }
        tickets.innerHTML = ticketCountDisp;
    }

    /**
     * Updates tickets per second display and updates ticket rate
     */
    function updateTPS() {
        ticketRate.innerHTML = ticketsPerSecond;
        ticketsPerTime = ticketsPerSecond / 10;
    }

    const shownAchievements = {
        hundredTickets: false,
        thousandTickets: false,
        hundredThousandTickets: false,
        millionTickets: false,
        billionTickets: false,
        goldenTicket: false,

        hundredClicks: false,
        thousandClicks: false,

        netThousandTickets: false,
        netMillionTickets: false,
        netBillionTickets: false,
        netTrillionTickets: false,

        tenBooths: false,
        hundredBooths: false,
        tenStalls: false,
        hundredStalls: false,
        tenRestaurants: false,
        hundredRestaurants: false,

        tenTeacups: false,
        hundredTeacups: false,
        tenKidCoasters: false,
        hundredKidCoasters: false,
        tenShips: false,
        hundredShips: false,
        tenFamCoasters: false,
        hundredFamCoasters: false,
        tenTowers: false,
        hundredTowers: false,
        tenThrillCoasters: false,
        hundredThrillCoasters: false

    };
    helpBox = document.getElementById("help_tab");
    helpButton = document.getElementById("helpButton");
    achievementBox = document.getElementById("achievement");
    achievementButton = document.getElementById("achievement_button");
    achievementTab = document.getElementById("achievement_tab");
    achievementTitle = document.getElementById("achievementTitle");
    achievementDescr = document.getElementById("achievementDescr");
    achievementAward = document.getElementById("achievementAward");
    achievementExit1 = document.querySelector(".exitButton1");
    achievementExit2 = document.querySelector(".exitButton2");
    helpExit = document.querySelector(".exitButton3")

    /**
     * Function that formats the notification when a user gets an achievement
     * 
     * @param {Title}   the title of the achievement
     * @param {Descr}   the description of the achievement
     * @param {Award}   the reward that the user gets from the achievement
     */

    function achievements(Title, Descr, Award) {
        achievementTitle.innerHTML = Title;
        achievementDescr.innerHTML = Descr;
        achievementAward.innerHTML = Award;
        achievementBox.style.visibility = "visible";

        setTimeout(() => {
            achievementBox.style.visibility = "hidden";
        }, 5000);
    }

    /**
     * A function that checks for first time achievements from the user using achievements, 
     * displays them as a notication, and keeps track of the current and net tickets.
     * 
     * 
     */


    function checkAchievements() {
        if (ticketCount >= 100 && !shownAchievements.hundredTickets) {
            shownAchievements.hundredTickets = true;
            achievements("Just Getitng started", "Congrats on reaching your first 100 tickets", "+20 Tickets");
            displayAchievements("ticket", "1");
            ticketCount += 20;
            netTickets += 20;
        } if (ticketCount >= 1000 && !shownAchievements.thousandTickets) {
            shownAchievements.thousandTickets = true;
            achievements("Now We're Talking", "Congrats on reaching 1,000 tickets", "+200 Tickets");
            displayAchievements("ticket", "2");
            ticketCount += 200;
            netTickets += 200;
        } if (ticketCount >= 100000 && !shownAchievements.hundredThousandTickets) {
            shownAchievements.hundredThousandTickets = true;
            achievements("The Big Leagues", "Congrats on reaching 100,000 tickets", "+20,000 Tickets");
            displayAchievements("ticket", "3");
            ticketCount += 20000;
            netTickets += 20000;
        } if (ticketCount >= 1000000 && !shownAchievements.millionTickets) {
            shownAchievements.millionTickets = true;
            achievements("One milly?!", "Congrats on reaching 1,000,000 tickets", "+200,000 Tickets");
            displayAchievements("ticket", "4");
            ticketCount += 2000000;
            netTickets += 2000000;
        } if (ticketCount >= 1000000000 && !shownAchievements.billionTickets) {
            shownAchievements.billionTickets = true;
            achievements("Roller Coaster Connoiseur", "Congrats on reaching 1,000,000,000 tickets", "+200,000,000 Tickets");
            displayAchievements("ticket", "5");
            ticketCount += 2000000000;
            netTickets += 2000000000;
        } if (goldenTicketDiscovery == true && !shownAchievements.goldenTicket) {
            shownAchievements.goldenTicket = true;
            achievements("Willy Wonka's Gold Ticket", "You found the long lost golden ticket", "+100,000 Tickets");
            displayAchievements("ticket", "10");
            ticketCount += 100000;
            netTickets += 100000;
        }

        if (clickCount >= 100 && !shownAchievements.hundredClicks) {
            shownAchievements.hundredClicks = true;
            achievements("Speedy Fingers", "You have clicked 100 times", "+250 Tickets");
            displayAchievements("click", "1");
            ticketCount += 250;
            netTickets += 250;
        } if (clickCount >= 1000 && !shownAchievements.thousandClicks) {
            shownAchievements.thousandClicks = true;
            achievements("Super Fingers", "You have clicked 1000 times", "+10,000 Tickets");
            displayAchievements("click", "2");
            ticketCount += 10000;
            netTickets += 10000;
        }

        if (netTickets >= 1000 && !shownAchievements.netThousandTickets) {
            shownAchievements.netThousandTickets = true;
            achievements("Profits are up", "You have earned 1,000 total tickets", "+500 Tickets");
            displayAchievements("ticket", "6");
            ticketCount += 500;
            netTickets += 500;
        } if (netTickets >= 1000000 && !shownAchievements.netMillionTickets) {
            shownAchievements.netMillionTickets = true;
            achievements("Roller Coaster Entrepreneur", "You have earned 1,000,000 total tickets", "+500,000 Tickets");
            displayAchievements("ticket", "7");
            ticketCount += 500000;
            netTickets += 500000;
        } if (netTickets >= 1000000000 && !shownAchievements.netBillionTickets) {
            shownAchievements.netBillionTickets = true;
            achievements("Roller Coaster Tycoon", "You have earned 1,000,000,000 total tickets", "+500,000,000 Tickets");
            displayAchievements("ticket", "8");
            ticketCount += 500000000;
            netTickets += 500000000;
        } if (netTickets >= 1000000000000 && !shownAchievements.netTrillionTickets) {
            shownAchievements.netTrillionTickets = true;
            achievements("Roller Coaster Empire", "You have earned 1,000,000,000,000 total tickets", "+500,000,000,000 Tickets");
            displayAchievements("ticket", "9");
            ticketCount += 500000000000;
            netTickets += 500000000000;
        }


        if (boothNum >= 10 && !shownAchievements.tenBooths) {
            shownAchievements.tenBooths = true;
            achievements("Business is booming", "Get your first 10 booths", "+500 Tickets");
            displayAchievements("click", "3");
            ticketCount += 500;
            netTickets += 500;
        } if (boothNum >= 100 && !shownAchievements.hundredBooths) {
            shownAchievements.hundredBooths = true;
            achievements("Real businessman", "Purchase 100 booths", "+5,000 Tickets");
            displayAchievements("click", "4");
            ticketCount += 5000;
            netTickets += 5000;
        } if (stallNum >= 10 && !shownAchievements.tenStalls) {
            shownAchievements.tenStalls = true;
            achievements("Stall Collector", "Get your first 10 stalls", "+5,000 Tickets");
            displayAchievements("click", "5")
            ticketCount += 5000;
            netTickets += 5000;
        } if (stallNum >= 100 && !shownAchievements.hundredStalls) {
            shownAchievements.hundredStalls = true;
            achievements("Minigame Tycoon", "Purchase 100 stalls", "+50,000 Tickets");
            displayAchievements("click", "6")
            ticketCount += 50000;
            netTickets += 50000;
        } if (foodNum >= 10 && !shownAchievements.tenRestaurants) {
            shownAchievements.tenRestaurants = true;
            achievements("Restaurant Expander", "Get your first 10 restaurants", "+15,000 Tickets");
            displayAchievements("click", "7")
            ticketCount += 15000;
            netTickets += 15000;
        } if (foodNum >= 100 && !shownAchievements.hundredRestaurants) {
            shownAchievements.hundredRestaurants = true;
            achievements("Franchiser", "Purcahse 100 Restaurants", "+100,000 Tickets");
            displayAchievements("click", "8")
            ticketCount += 100000;
            netTickets += 100000;
        }


        if (teacupNum >= 10 && !shownAchievements.tenTeacups) {
            shownAchievements.tenTeacups = true;
            achievements("Tea party", "Get your first 10 teacups", "+2,000 Tickets");
            displayAchievements("aclick", "1")
            ticketCount += 2000;
            netTickets += 2000;
        } if (teacupNum >= 100 && !shownAchievements.hundredTeacups) {
            shownAchievements.hundredTeacups = true;
            achievements("Grand Tea Party", "Purchase 100 teacups", "+20,000 Tickets");
            displayAchievements("aclick", "2")
            ticketCount += 20000;
            netTickets += 20000;
        } if (kidCoasterNum >= 10 && !shownAchievements.tenKidCoasters) {
            shownAchievements.tenKidCoasters = true;
            achievements("Roller Rookies", "Get your first 10 Kiddie Coasters", "+12,000 Tickets");
            displayAchievements("aclick", "3")
            ticketCount += 12000;
            netTickets += 12000;
        } if (kidCoasterNum >= 100 && !shownAchievements.hundredKidCoasters) {
            shownAchievements.hundredKidCoasters = true;
            achievements("Kiddie Kingdom", "Purchase 100 Kiddie Coasters", "+120,000 Tickets");
            displayAchievements("aclick", "4")
            ticketCount += 120000;
            netTickets += 120000;
        } if (swingShipNum >= 10 && !shownAchievements.tenShips) {
            shownAchievements.tenShips = true;
            achievements("Captain of the Carnival", "Get your first 10 Swing Ships", "+100,000 Tickets");
            displayAchievements("aclick", "5")
            ticketCount += 100000;
            netTickets += 100000;
        } if (swingShipNum >= 100 && !shownAchievements.hundredShips) {
            shownAchievements.hundredShips = true;
            achievements("Pirate of the Caribbean", "Purchase 100 Swing Ships", "+1,000,000 Tickets");
            displayAchievements("aclick", "6")
            ticketCount += 100000;
            netTickets += 100000;
        } if (famCoasterNum >= 10 && !shownAchievements.tenFamCoasters) {
            shownAchievements.tenFamCoasters = true;
            achievements("Family adventure", "Get your first 10 Family Coasters", "+150,000 Tickets");
            displayAchievements("aclick", "7")
            ticketCount += 150000;
            netTickets += 150000;
        } if (famCoasterNum >= 100 && !shownAchievements.hundredFamCoasters) {
            shownAchievements.hundredFamCoasters = true;
            achievements("Bloodline Thrill", "Purchase 100 Family Coasters", "+1,500,000 Tickets");
            displayAchievements("aclick", "8")
            ticketCount += 1500000;
            netTickets += 1500000;
        } if (dropTowerNum >= 10 && !shownAchievements.tenTowers) {
            shownAchievements.tenTowers = true;
            achievements("Phobia of heights no more", "Get your first 10 Drop Towers", "+1,500,000 Tickets");
            displayAchievements("aclick", "9")
            ticketCount += 1500000;
            netTickets += 1500000;
        } if (dropTowerNum >= 100 && !shownAchievements.hundredTowers) {
            shownAchievements.hundredTowers = true;
            achievements("Gravity's Nemesis", "Purchase 100 Drop Towers", "+15,000,000 Tickets");
            displayAchievements("aclick", "10")
            ticketCount += 15000000;
            netTickets += 15000000;
        } if (thrillCoasterNum >= 10 && !shownAchievements.tenThrillCoasters) {
            shownAchievements.tenThrillCoasters = true;
            achievements("Adrenaline Chaser", "Get your first 10 Thrill Coasters", "+5,000,000 Tickets");
            displayAchievements("aclick", "11")
            ticketCount += 5000000;
            netTickets += 5000000;
        } if (thrillCoasterNum >= 100 && !shownAchievements.hundredThrillCoasters) {
            shownAchievements.hundredThrillCoasters = true;
            achievements("Thrill Ride Tycoon", "Purchase 100 Thrill Coasters", "+50,000,000 Tickets");
            displayAchievements("aclick", "12")
            ticketCount += 50000000;
            netTickets += 50000000;
        }
    }

    boothDisplay = document.querySelector(".upgradeDisplay1");
    stallDisplay = document.querySelector(".upgradeDisplay2");
    restaurantDisplay = document.querySelector(".upgradeDisplay3");
    teacupDisplay = document.querySelector(".upgradeDisplay4");
    kiddieDisplay = document.querySelector(".upgradeDisplay5");
    shipDisplay = document.querySelector(".upgradeDisplay6");
    familyDisplay = document.querySelector(".upgradeDisplay7");
    towerDisplay = document.querySelector(".upgradeDisplay8");
    thrillDisplay = document.querySelector(".upgradeDisplay9");

    /**
     * function that visually displays the upgrades as the user gets more
     * 
     * @param {display} keeps track of the specific upgrades that are to be displayed
     * @param {num} the div element seperates them into 5 different components and shows them as the user
     * increases their upgrades
     * @param {upgradeId} focuses on how many of that specific upgrades are to be displayed
     */


    function displayUpgrades(display, num, upgradeId) {
        if (num >= 50) {
            document.getElementById(upgradeId + "5").style.visibility = "visible";
        } else if (num >= 40) {
            document.getElementById(upgradeId + "4").style.visibility = "visible";
        } else if (num >= 30) {
            document.getElementById(upgradeId + "3").style.visibility = "visible";
        } else if (num >= 20) {
            document.getElementById(upgradeId + "2").style.visibility = "visible";
        } else if (num > 0) {
            display.style.visibility = "visible";
            document.getElementById(upgradeId + "1").style.visibility = "visible";
        }
    }

    /**
     * function keeps track of completed achievements and gives the user a check off when they complet it
     * 
     * @param {type} the type of achievement the user has gotten (manual click, autoclick, etc)
     * @param {num} the specific achievement the user has gotten
     */


    function displayAchievements(type, num) {
        document.getElementById(type + num).textContent = document.getElementById(type + num).textContent.replace("☐", "☑");
    }

    let probability = 1000;
    let goldenTicketDiscovery = false;
    bigTicket = document.getElementById("theTicket");
    bigTicket.addEventListener("click", function () {
        ticketCount += clickValue;
        displayTickets();
        netTickets += clickValue;
        clickCount += 1;
        randInt = Math.floor(Math.random() * probability);
        if (randInt == 0) {
            goldenTicketDiscovery = true;
            goldTicket.style.visibility = "visible";
        }
    });

    bigTicket.addEventListener("mouseover", function () {
        bigTicket.src = "images/ticketHover.png";
    })

    bigTicket.addEventListener("mouseout", function () {
        bigTicket.src = "images/ticket.png";
    })

    goldTicket.addEventListener("mouseover", function () {
        goldTicket.src = "images/gticketHover.png";
    })

    goldTicket.addEventListener("mouseout", function () {
        goldTicket.src = "images/gticket.png";
    })

    let goldTicketVal = 1000;
    goldTicket.addEventListener("click", function () {
        this.style.visibility = "hidden";
        ticketCount += goldTicketVal;
        netTickets += goldTicketVal;
        displayTickets();
        checkAchievements();
    });

    booth = document.getElementById("ticketBooth");
    boothP = document.getElementById("tbPrice");
    boothN = document.getElementById("tbNum");
    let boothPrice = 50;
    let boothNum = 0;
    boothP.innerHTML = boothPrice;
    booth.addEventListener("click", function () {
        if (ticketCount >= boothPrice) {
            clickValue += 10;
            ticketCount -= boothPrice;
            boothPrice += 70;
            boothP.innerHTML = boothPrice
            displayTickets();
            boothNum += 1;
            displayUpgrades(boothDisplay, boothNum, "booth")
            boothN.innerHTML = boothNum;

        }
    })

    stall = document.getElementById("prizeGame");
    stallP = document.getElementById("pgPrice");
    stallN = document.getElementById("pgNum");
    let stallPrice = 1000;
    let stallNum = 0;
    stallP.innerHTML = stallPrice;
    stall.addEventListener("click", function () {
        if (ticketCount >= stallPrice) {
            clickValue += 100;
            ticketCount -= stallPrice;
            stallPrice += 1400;
            stallP.innerHTML = stallPrice;
            displayTickets();
            stallNum += 1;
            displayUpgrades(stallDisplay, stallNum, "stall")
            stallN.innerHTML = stallNum;
        }
    })

    food = document.getElementById("restaraunt");
    foodP = document.getElementById("rsPrice");
    foodN = document.getElementById("rsNum")
    let foodPrice = 5000;
    let foodNum = 0;
    foodP.innerHTML = foodPrice;
    food.addEventListener("click", function () {
        if (ticketCount >= foodPrice) {
            clickValue += 1000;
            ticketCount -= foodPrice;
            foodPrice += 8000;
            foodP.innerHTML = foodPrice;
            displayTickets();
            foodNum += 1;
            displayUpgrades(restaurantDisplay, foodNum, "restaurant")
            foodN.innerHTML = foodNum;
        }
    })

    teacup = document.getElementById("teacup");
    teacupP = document.getElementById("tcPrice");
    teacupN = document.getElementById("tcNum");
    let teacupPrice = 500;
    let teacupNum = 0;
    teacupP.innerHTML = teacupPrice;
    teacup.addEventListener("click", function () {
        if (ticketCount >= teacupPrice) {
            ticketsPerSecond += 10;
            updateTPS();
            ticketCount -= teacupPrice;
            teacupPrice += 750;
            teacupP.innerHTML = teacupPrice;
            teacupNum += 1;
            displayUpgrades(teacupDisplay, teacupNum, "teacup")
            teacupN.innerHTML = teacupNum;
        }
    })

    kidCoaster = document.getElementById("kidCoaster");
    kidCoasterP = document.getElementById("kcPrice");
    kidCoasterN = document.getElementById("kcNum");
    let kidCoasterPrice = 2500;
    let kidCoasterNum = 0;
    kidCoasterP.innerHTML = kidCoasterPrice;
    kidCoaster.addEventListener("click", function () {
        if (ticketCount >= kidCoasterPrice) {
            ticketsPerSecond += 100;
            updateTPS();
            ticketCount -= kidCoasterPrice;
            kidCoasterPrice += 3000;
            kidCoasterP.innerHTML = kidCoasterPrice;
            kidCoasterNum += 1;
            displayUpgrades(kiddieDisplay, kidCoasterNum, "kiddie")
            kidCoasterN.innerHTML = kidCoasterNum;
        }
    })

    swingShip = document.getElementById("swingingShip");
    swingShipP = document.getElementById("ssPrice");
    swingShipN = document.getElementById("ssNum");
    let swingShipPrice = 20000;
    let swingShipNum = 0
    swingShipP.innerHTML = swingShipPrice;
    swingShip.addEventListener("click", function () {
        if (ticketCount >= swingShipPrice) {
            ticketsPerSecond += 1000;
            updateTPS();
            ticketCount -= swingShipPrice;
            swingShipPrice += 30000;
            swingShipP.innerHTML = swingShipPrice;
            swingShipNum += 1;
            displayUpgrades(shipDisplay, swingShipNum, "ship")
            swingShipN.innerHTML = swingShipNum;
        }
    })

    famCoaster = document.getElementById("famCoaster");
    famCoasterP = document.getElementById("fcPrice");
    famCoasterN = document.getElementById("fcNum");
    let famCoasterPrice = 100000;
    let famCoasterNum = 0;
    famCoasterP.innerHTML = famCoasterPrice;
    famCoaster.addEventListener("click", function () {
        if (ticketCount >= famCoasterPrice) {
            ticketsPerSecond += 130000;
            updateTPS();
            ticketCount -= famCoasterPrice;
            famCoasterPrice += 35000;
            famCoasterP.innerHTML = famCoasterPrice;
            famCoasterNum += 1;
            displayUpgrades(familyDisplay, famCoasterNum, "family")
            famCoasterN.innerHTML = famCoasterNum;
        }
    })

    dropTower = document.getElementById("dropTower");
    dropTowerP = document.getElementById("dtPrice");
    dropTowerN = document.getElementById("dtNum");
    let dropTowerPrice = 250000;
    let dropTowerNum = 0;
    dropTowerP.innerHTML = dropTowerPrice;
    dropTower.addEventListener("click", function () {
        if (ticketCount >= dropTowerPrice) {
            ticketsPerSecond += 100000;
            updateTPS();
            ticketCount -= dropTowerPrice;
            dropTowerPrice += 375000;
            dropTowerP.innerHTML = dropTowerPrice;
            dropTowerNum += 1;
            displayUpgrades(towerDisplay, dropTowerNum, "tower")
            dropTowerN.innerHTML = dropTowerNum;
        }
    })

    thrillCoaster = document.getElementById("thrillCoaster");
    thrillCoasterP = document.getElementById("thPrice");
    thrillCoasterN = document.getElementById("thNum");
    let thrillCoasterPrice = 1000000;
    let thrillCoasterNum = 0;
    thrillCoasterP.innerHTML = thrillCoasterPrice;
    thrillCoaster.addEventListener("click", function () {
        if (ticketCount >= thrillCoasterPrice) {
            ticketsPerSecond += 500000;
            updateTPS();
            ticketCount -= thrillCoasterPrice;
            thrillCoasterPrice += 1200000;
            thrillCoasterP.innerHTML = thrillCoasterPrice;
            thrillCoasterNum += 1;
            displayUpgrades(thrillDisplay, thrillCoasterNum, "thrill")
            thrillCoasterN.innerHTML = thrillCoasterNum;
        }
    })
    let achievementClicks = 0;
    let completion = 0;

    let helpClicks = 0;

    achievementButton.addEventListener("click", function () {
        achievementClicks++;
        if (achievementClicks % 2 != 0) {
            completion = 0;
            for (let x of Object.values(shownAchievements)) {
                if (x) {
                    completion++;
                }
            }
            let percentage = Math.floor((completion / 30) * 100);
            document.getElementById("achievement_title").innerHTML = `Achievements (${completion}/30 | ${percentage}%)`
            achievementTab.style.visibility = "visible";
        } else {
            achievementTab.style.visibility = "hidden";
        }

    });

    helpButton.addEventListener("click", function () {
        helpClicks++
        if (helpClicks % 2 != 0) {
            helpBox.style.visibility = "visible";
        } else {
            helpBox.style.visibility = "hidden";
        }
    })


    document.addEventListener("click", function (e) {
        if (!achievementTab.contains(e.target) &&
            !achievementButton.contains(e.target)) {
            achievementTab.style.visibility = "hidden";
        }
    });

    achievementExit1.addEventListener("click", function () {
        achievementBox.style.visibility = "hidden";
    });

    achievementExit2.addEventListener("click", function () {
        achievementTab.style.visibility = "hidden";
    });

    helpExit.addEventListener("click", function () {
        helpBox.style.visibility = "hidden";
    })


});