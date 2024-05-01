var currentPage = 1;
var totalPages = 4;

var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var pageBtns = document.getElementsByClassName("pageBtn");

function updateButtons() {
  if (currentPage === 1) {
    prevBtn.classList.add("hide");
  } else {
    prevBtn.classList.remove("hide");
  }

  if (currentPage === totalPages) {
    nextBtn.classList.add("hide");
  } else {
    nextBtn.classList.remove("hide");
  }

  for (var i = 0; i < pageBtns.length; i++) {
    if (i + 1 === currentPage) {
      pageBtns[i].classList.add("active");
    } else {
      pageBtns[i].classList.remove("active");
    }
  }
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    updateButtons();
    // TODO: Cập nhật nội dung trang web tại đây khi người dùng chuyển trang
  }
}

prevBtn.addEventListener("click", function () {
  goToPage(currentPage - 1);
});

nextBtn.addEventListener("click", function () {
  goToPage(currentPage + 1);
});

for (var i = 0; i < pageBtns.length; i++) {
  (function (i) {
    pageBtns[i].addEventListener("click", function () {
      goToPage(i + 1);
    });
  })(i);
}

updateButtons();



//ham tim kiem
function kt() {
  var key = event.which || event.keyCode;
  if (key == 13){
    timkiem();
  }
}

function timkiem(){
  const keywords = document.getElementsByClassName("input-search")[0].value.toLowerCase();
  //data sau khi lay tu keywords
  const filteredClothing = products.filter(clothing => clothing.productName.toLowerCase().includes(keywords));
  console.log(filteredClothing);
}

