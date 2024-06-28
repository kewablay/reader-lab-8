import { getApiImageUrl, getBookPreviewLink } from "./utils.js";

export const displayBooks = (books) => {
  const bookContainer = document.querySelector(".swiper-wrapper");
  console.log("Book", books);

  books.reading_log_entries.forEach((book) => {
    let singleBook = book.work;
    // console.log("Book", singleBook);

    // Create a div element for each book
    const bookDiv = document.createElement("div");
    bookDiv.classList.add(
      "swiper-slide",
      // "bg-gray-400",
      "h-[20rem]",
      "rounded-lg",
      "overflow-hidden",
      "shadow-2xl"
    );
    // bookDiv.style = "background: var(--secondary-dark)";

    // Create an img element for the book cover
    const img = document.createElement("img");
    img.src = `${getApiImageUrl(singleBook.cover_id)}`;
    img.classList.add("w-full", "h-full", "object-cover");
    img.loading = "lazy";
    img.alt = singleBook.key.split("/").pop(); // Add alt text if needed

    // Append the img element to the book div
    bookDiv.appendChild(img);

    // Append the book div to the main container
    bookContainer.appendChild(bookDiv);
  });
};

export const bookLoading = () => {
  const bookContainer = document.querySelector(".swiper-wrapper");
  bookContainer.innerHTML = `
  <div class="swiper-slide  rounded-lg animate-pulse"></div>
  <div class="swiper-slide  rounded-lg animate-pulse"></div>
  <div class="swiper-slide  rounded-lg animate-pulse"></div>
  <div class="swiper-slide  rounded-lg animate-pulse"></div>
  `;
  bookContainer.childNodes.forEach((node) => {
    node.style = "background: var(--secondary-dark)";
  });
};

export function clearBookLoading() {
  const bookContainer = document.querySelector(".swiper-wrapper");
  bookContainer.innerHTML = "";
}

export const displayBookDetail = (book) => {
  let bookDetailContainer = document.getElementById("bookDetailContainer");
  bookDetailContainer.innerHTML = `<div
        class="md:col-span-6 flex justify-center items-center rounded-lg relative"
      >
        <div
          class="absolute w-[20rem] h-[20rem] rounded-full bg-[var(--secondary-dark)] -z-10" 
        ></div>
        <div
          class=" h-[20rem] overflow-hidden w-[50%] sm:w-[40%] md:w-[70%] lg:w-[16rem] rounded-lg z-20" style="background: var(--secondary-dark)"
        >
          <img class='w-full h-full' src=${getApiImageUrl(
            book.cover_i
          )} alt="" />
        </div>
      </div>

      <div class="about-book flex-col md:col-span-6 space-y-5">
        <h2 class="text-3xl font-bold">${book.title}</h2>
        <p class="tracking-[3px] mt-4 uppercase text-gray-500">${
          book.author_name[0]
        }</p>
        <div class="gap-5 flex items-center">
          <div class="flex gap-1">
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
          </div>
          <p>${book.ratings_average}</p>
        </div>
        <p class="desc">
          Welcome to your ultimate reading companion! Dive into an extensive
          library, customize your reading experience, and enjoy every page like
          never before.
        </p>

        <div class="flex gap-4">
          <div class="rounded-lg  px-6 py-2 h-fit" style="background: var(--secondary-light)">
            <small class="text-center">Publised Date</small>
            <p class="text-center">${book.publish_date[0]}</p>
          </div>
          <div class="rounded-lg  px-6 py-2 h-fit" style="background: var(--secondary-light)">
            <small class="text-center">Publisher</small>
            <p class="truncate">${book.publisher[0]}</p>
          </div>
          <div class="rounded-lg  px-6 py-2 h-fit" style="background: var(--secondary-light)">
            <small class="text-center">Read by</small>
            <p class="text-center">${book.already_read_count}</p>
          </div>
        </div>

        <a
          href=${getBookPreviewLink(book.ia[0])}
          class="w-full inline-block text-center py-4 hover:brightness-150 transition-all duration-100 ease-in-out rounded-md bg-[#E06126] text-white font-bold"
        >
          Preview Book
        </a>
      </div>`;
};

export const displayBookDetailLoading = () => {
  let bookDetailContainer = document.getElementById("bookDetailContainer");
  bookDetailContainer.innerHTML = `<div
        class="animate-pulse md:col-span-6 flex justify-center items-center rounded-lg relative"
      >
        <div
          class="absolute w-[20rem] h-[20rem] rounded-full bg-[var(--secondary-dark)] -z-10"
        ></div>
        <div
          class="skeleton h-[20rem] w-[50%] sm:w-[40%] md:w-[70%] lg:w-[16rem] rounded-lg z-20"
        >
          <img src="" alt="" />
        </div>
      </div>

      <div class="animate-pulse about-book flex-col md:col-span-6 space-y-5">
        <div class="text-3xl font-bold"><div class='h-8 w-[80%] rounded-full skeleton'></div></div>
        <div class="tracking-[3px] mt-4 uppercase text-gray-500"><div class='h-4 w-[12rem] rounded-full skeleton'></div></div>
        <div class="gap-5 flex items-center">
          <div class="flex gap-1 animate-pulse">
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
            <img src="/assets/icons/star.svg" alt="" />
          </div>
          <p><div class='h-4 w-[4rem] rounded-full skeleton'></div></p>
        </div>
        <div class="desc space-y-2">
          <p class="w-full mt-0 h-4 rounded-full skeleton"> </p>
          <p class="w-full mt-0 h-4 rounded-full skeleton"> </p>
          <p class="w-[70%] mt-0 h-4 rounded-full skeleton"> </p>
        </div>

        <div class="flex gap-4">
          <div class="rounded-lg skeleton px-6 py-2 h-fit">
            <div><div class='h-3 w-[3rem] mx-auto rounded-full skeleton'></div></div>
            <div><div class='h-4 mt-1 w-[5rem] rounded-full skeleton'></div></div>
          </div>
          <div class="rounded-lg skeleton px-6 py-2 h-fit">
            <div><div class='h-3 w-[3rem] mx-auto rounded-full skeleton'></div></div>
            <div><div class='h-4 mt-1 w-[5rem] rounded-full skeleton'></div></div>
          </div>
          <div class="rounded-lg skeleton px-6 py-2 h-fit">
            <div><div class='h-3 w-[2rem] mx-auto rounded-full skeleton'></div></div>
            <div><div class='h-4 mt-1 w-[4rem] rounded-full skeleton'></div></div>
          </div>
        </div>

        <div
          class="w-full py-4 hover:brightness-150 transition-all duration-100 ease-in-out rounded-md bg-gray-400 text-white font-bold"
        >
          <div class='h-5 mx-auto w-[8rem] rounded-full skeleton'></div>
        </div>
      </div>`;
};

export function clearBookDetailLoading() {
  let bookDetailContainer = document.getElementById("bookDetailContainer");
  bookDetailContainer.innerHTML = "";
}
