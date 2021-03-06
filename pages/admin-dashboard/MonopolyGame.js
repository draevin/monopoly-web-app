// This is simple data entry.  We got the names of the prizes from the gameboard and made lists of the pieces that allow you to win those prizes...
// FOR EXAMPLE: You win the $5 Cash prize by collecting the tickets with code numbers "9J36A","9J37B","9J38C", and "9J39D"
//		therefore we initialized a list variable and filled it with the game piece codes that will make you win the prize.
var prizeCheckList$5Cash = ["9J36A","9J37B","9J38C","9J39D"];
var prizeCheckList$5GroceryGiftCard = ["9H32A","9H33B","9H34C","9H35D"];
var prizeCheckList$10Cash = ["9G28A","9G29B","9G30C","9G31D"];
var prizeCheckList$10GroceryGiftCard = ["9F24A","9F25B","9F26C","9F27D"];
var prizeCheckList$15GroceryGiftCard = ["9E20A","9E21B","9E22C","9E23D"];
var prizeCheckList$25FandangoGiftCard = ["9D16A","9D17B","9D18C","9D19D"];
var prizeCheckList$25Cash = ["9C12A","9C13B","9C14C","9C15D"];
var prizeCheckList$25GiftCardMall = ["8X17A", "8X18B","8X19C","8X20D"];
var prizeCheckList$25GroceryGiftCard = ["8W21A","8W22B","8W23C","8W24D"];
var prizeCheckList$50GroceryGiftCard = ["8V25A","8V26B","8V27C","8V28D"];
var prizeCheckList$100Cash = ["8T29A","8T30B","8T31C","8T32D"];
var prizeCheckList$100GroceryGiftCard = ["8S33A","8S34B","8S35C","8S36D"];
var prizeCheckList$200Cash = ["8R37A","8R38B","8R39C","8R40D"];
var prizeCheckList$200FamilyPicnic = ["8Q41A","8Q42B","8Q43C","8Q44D"];
var prizeCheckList$300SmartWatch = ["8P45A","8P46B","8P47C","8P48D"];
var prizeCheckList$500GroceryGiftCard = ["8N49A","8N50B","8N51C","8N52D"];
var prizeCheckList$1000LaptopComputer = ["8M53A","8M54B","8M55C","8M56D"];
var prizeCheckList$1000GroceryGiftCard = ["8L57A","8L58B","8L59C","8L60D"]
var prizeCheckList$1000Cash = ["8K61A","8K62B","8K63C","8K64D"];
var prizeCheckList$1500LEDHDTV = ["8J65A","8J66B","8J67C","8J68D"];
var prizeCheckList$1500GasGrillAndGroceries = ["8H69A","8H70B","8H71C","8H72D"];
var prizeCheckList$5000Groceries = ["8G73A","8G74B","8G75C","8G76D"];
var prizeCheckList$5000Cash = ["8F77A","8F78B","8F79C","8F80D"];
var prizeCheckList$10000FamilyVacation = ["9B07A","9B08B","9B09C","9B10D","9B11E"];
var prizeCheckList$10000FourWheeler = ["9A02A","9A03B","9A04C","9A05D","9A06E"];
var prizeCheckList$20000CollegeTuition = ["8B96A","8B97B","8B98C","8B99D","8B00E"];
var prizeCheckList$35000VehicleOfYourChoice = ["8C91A","8C92B","8C93C","8C94D","8C95E"];
var prizeCheckList$40000HomeMakeover = ["8D86A","8D87B","8D88C","8D89D","8D90E"];
var prizeCheckList$100000CashOrLuxuryCar = ["8E81A","8E82B","8E83C","8E84D","8E85E"];
var prizeCheckList$1000000Cash = ["8Z01A","8Z02B","8ZO3C","8Z04D","8Z05E","8Z06F","8Z07G","8Z08H"];
var prizeCheckList$1000000VacationHome = ["8Y09A","8Y10B","8Y11C","8Y12D","8Y13E","8Y14F","8Y15G","8Y16H"];

//  This following lines of code dump all of the previous lists into one list.
var completePieceCodeList = [];
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$5Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$5GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$10Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$10GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$15GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$25FandangoGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$25Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$25GiftCardMall);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$25GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$50GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$100Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$100GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$200Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$200FamilyPicnic);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$300SmartWatch);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$500GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1000LaptopComputer);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1000GroceryGiftCard);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1000Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1500LEDHDTV);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1500GasGrillAndGroceries);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$5000Groceries);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$5000Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$10000FamilyVacation);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$10000FourWheeler);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$20000CollegeTuition);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$35000VehicleOfYourChoice);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$40000HomeMakeover);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$100000CashOrLuxuryCar);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1000000Cash);
completePieceCodeList = completePieceCodeList.concat(prizeCheckList$1000000VacationHome);

var inventoryOfPiecesByIndex = [];
for (var i=0; i<138; i++){
	inventoryOfPiecesByIndex.push(0);
}

function addGamePiece(pieceCode){
	
	var inputCodeIndex = completePieceCodeList.indexOf(pieceCode);
	
	if (inputCodeIndex != -1)/*<-- tests if the piece code is valid*/{
		inventoryOfPiecesByIndex[inputCodeIndex] += 1; //<-- modifies inventory of valid tickets.
        
        document.getElementById("addPiece").value = "";
        
        var fillColor;
        
        if (inputCodeIndex >= 0 && inputCodeIndex <=27) {
            fillColor = '#888888'
        } else if (inputCodeIndex >= 28 && inputCodeIndex <= 35){
            fillColor = '#b5a38d';
        } else if (inputCodeIndex >= 36 && inputCodeIndex <= 43){
            fillColor = '#90cbe5';
        } else if (inputCodeIndex >= 44 && inputCodeIndex <= 51){
            fillColor = '#e590e3';
        } else if (inputCodeIndex >= 52 && inputCodeIndex <= 59){
            fillColor = '#e5b290';
        } else if (inputCodeIndex >= 60 && inputCodeIndex <= 67){
            fillColor = '#e59090';
        } else if (inputCodeIndex >= 68 && inputCodeIndex <= 75){
            fillColor = '#e5de90';
        } else if (inputCodeIndex >= 76 && inputCodeIndex <= 83){
            fillColor = '#95e590';
        } else if (inputCodeIndex >= 82 && inputCodeIndex <= 91){
            fillColor = '#90a3e5';
        } else if (inputCodeIndex >= 92 && inputCodeIndex <= 138){
            fillColor = '#fff082';
        } else {
            fillColor = '#a9a9a9';
        }
        
        document.getElementById(inputCodeIndex).style.backgroundColor = fillColor;
	}
	else {
		alert("The code you entered is not a valid code.")
        
	}
    document.getElementById("addPiece").focus();
}