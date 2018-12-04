
// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function addItem(){
    let bookCoverLink=document.getElementById("cover")
    let bookTitle=document.getElementById("title")
    //default values
    bookCoverLink.value="https://images-na.ssl-images-amazon.com/images/I/71BhkdBC3DL.jpg"
    bookTitle.value="Et tu trouveras le trésor qui dort en toi Poche – 28 mars 2018 de Laurent Gounelle "
    
    modal.style.display = "block";
}
function submitModal(){
    let bookCoverLink=document.getElementById("cover")
    let bookTitle=document.getElementById("title")
    let Item = document.querySelector(".item")
    let AllItems = document.querySelector(".items")
    let itemClone = Item.cloneNode(1)
    
    itemClone.querySelector(".image img").src=bookCoverLink.value
    itemClone.querySelector(".item-description").innerHTML=bookTitle.value
    itemClone.querySelector(".quantity-value").value='0'
    itemClone.querySelector(".item-price").innerHTML='$0'

    AllItems.appendChild(itemClone)
    modal.style.display = "none";
    
}
function liked(event){
    let img= event.target
    if (img.src == 'https://cdn130.picsart.com/241369973049212.png?r1024x1024')
        img.src="https://image.freepik.com/free-icon/like-heart-symbol-of-ios-7-interface_318-36651.jpg"
    else if (img.src == 'https://image.freepik.com/free-icon/like-heart-symbol-of-ios-7-interface_318-36651.jpg')
    img.src="https://cdn130.picsart.com/241369973049212.png?r1024x1024"

}
function quantityPlus(event) {
    var ParentDiv = event.target.parentElement
    let quantityValue= ParentDiv.querySelector(".quantity-value")
    let itemPrice= ParentDiv.parentElement.querySelector(".item-price")
    quantityValue.value++
    itemPrice.innerHTML = "$"+quantityValue.value*10
    computeTotal(true)
}
  function quantityMinus(event) {
    var ParentDiv = event.target.parentElement
    let quantityValue= ParentDiv.querySelector(".quantity-value")
    let itemPrice= ParentDiv.parentElement.querySelector(".item-price")
    if (quantityValue.value>=1) {
        quantityValue.value--;
        itemPrice.innerHTML = "$"+quantityValue.value*10
        computeTotal(false)
    }
  }
  function removeItem(event){
      let btn =event.target.parentElement.parentElement.parentElement
      btn.style.display="none"
  }
  function computeTotal(bool){
    let totalPrice = document.querySelector(".total-price")
    if (bool) totalPrice.innerHTML=parseInt(totalPrice.innerHTML)+10
    else totalPrice.innerHTML=parseInt(totalPrice.innerHTML)-10
 
 
  }
  document.addEventListener("click", function(event) {
    if (event.target.className === "plus-btn") {
        quantityPlus(event);
    }
    if (event.target.className === "minus-btn"){
        quantityMinus(event);
    }
    if (event.target.className === "like-img"){
        liked(event);
    }
    if (event.target.className === "remove-btn"){
        removeItem(event);
    }
   if (event.target.className === "add-item"){
        addItem()
    }
    if (event.target.className === "btn-submit"){
        submitModal()
    }
  });

  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}