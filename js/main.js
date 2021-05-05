const link = document.querySelector(".modal-btn");

const checkPublic = document.querySelector("#modal-public"),
    checkConfidental = document.querySelector("#modal-confidental"),
    input = document.querySelectorAll("input[type=checkbox]"),
    checkPublicWrapper = document.querySelector(".modal-public__wrapper");

const publicBtn = document.querySelector(".public-btn"),
    modalConfidental = document.querySelector(".modal-confidental"),
    modalConfidentalClose = modalConfidental.querySelector(".modal__wrapper-btn"),
    modalPublic = document.querySelector(".modal-public"),
    modalPublicClose=modalPublic.querySelector(".modal__wrapper-btn")

checkPublicWrapper.addEventListener("click", () => {
    modalPublic.classList.add("active")
    // document.querySelector(".modal__text").addEventListener("scroll", (e) => {
    //     let allHeight = e.target.scrollHeight-e.target.clientHeight
    //         scrollHeight=e.target.scrollTop
    //     if (allHeight - 100 < scrollHeight) {
    //         modalPublicClose.classList.add("modal-public__btn_active")
    //         modalPublicClose.addEventListener("click", () => {
    //             modalPublic.classList.remove("active")
    //             document.body.style.overflow = ""
    //             checkPublic.disabled = "false"
    //             checkPublic.checked="true"
    //         })
    //     }
    // })


        if (true) {
            modalPublicClose.classList.add("modal-public__btn_active")
            modalPublicClose.addEventListener("click", () => {
                modalPublic.classList.remove("active")
                document.body.style.overflow = ""
                checkPublic.disabled = "false"
                checkPublic.checked="true"
            })
        }

})

link.addEventListener("click", (e) => {
    if (!checkPublic.checked||!checkConfidental.checked) {
        e.preventDefault()
    } else {
        location.href = "https://bit.ly/3fnVWIg"
    }
})
let activeLink=0
input.forEach(i => {
    i.addEventListener('change', (e) => {
        if (e.target.checked) {
            activeLink++
        } else[
            activeLink--
        ]
        activeLink==2?link.classList.add("modal-btn_active"):link.classList.remove("modal-btn_active")
    })
})


publicBtn.addEventListener('click', () => {
    modalConfidental.classList.add("active")
    document.body.style.overflow="hidden"
})
modalConfidentalClose.addEventListener("click", () => {
    modalConfidental.classList.remove("active")
    document.body.style.overflow = ""
    
})

closeModalByWrapperClick(modalConfidental)
closeModalByWrapperClick(modalPublic)
closeModal(modalConfidental, modalConfidentalClose)
function closeModalByWrapperClick(selector) {
    selector.addEventListener("click", (e) => {
        if (e.target == selector) {
            selector.classList.remove("active")
            document.body.style.overflow=""
        }
    })
}
function closeModal(selector, closeSelector) {
    closeSelector.addEventListener("click", () => {
        selector.classList.remove("active")
        document.body.style.overflow = ""
    
})
}

//select
const select = document.querySelector(".select"),
        selectList = document.querySelector(".select__list"),
        selectItem = document.querySelectorAll(".select__item"),
        selectHeader = select.querySelector(".select__head")
    selectHeader.addEventListener("click", () => {
        selectToggle()
    })
    selectItem.forEach(item => {
        item.addEventListener("click", () => {
            select.querySelector(".select__head").innerText = item.innerText
            select.querySelector(".select__input").value = item.innerText
            if (document.documentElement.clientWidth < 992) {
                selectHeader.style.color="black"
            }
            selectToggle()
        })
    })
    function selectToggle() {
        selectList.classList.toggle("select__list_active")
    }
