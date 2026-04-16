var introTitles = [
    "A better way to sell.",
    "A better way to buy.",
    "Safe and efficient.",
    "Learn More"
];

var introTexts = [
    "Sellers can upload product information more easily, manage item details in one place, and keep the selling process clear and simple.",
    "Buyers can quickly find products with clean information, direct navigation, and a shopping experience that is easier to understand.",
    "MY Store focuses on a smoother and safer process so users can browse, search, and interact with less confusion and higher efficiency.",
    "More services, more product support, and more detailed platform functions will be added in later pages of MY Store."
];

function showIntroCard(index)
{
    document.getElementById("introModalTitle").innerHTML = introTitles[index];
    document.getElementById("introModalText").innerHTML = introTexts[index];
    document.getElementById("introModal").style.display = "block";
}

function closeIntroModal()
{
    document.getElementById("introModal").style.display = "none";
}

function goToProductPage(productName)
{
    window.location.href = "search.html";
}

window.onclick = function(event)
{
    var modal = document.getElementById("introModal");

    if (event.target == modal)
    {
        modal.style.display = "none";
    }
}

document.onkeydown = function(event)
{
    if (event.key == "Escape")
    {
        closeIntroModal();
    }
}
