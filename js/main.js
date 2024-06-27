new Vue({
    el: '#app',
    data: {
      showOverlay: false,
      showLoginOverlay: false
    },
    template: `
      <div>
        <nav class="bg-[#8E365E] p-4 flex justify-between items-center z-10">
          <button @click="showOverlay = true" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <div class="text-white text-lg">Logo</div>
          <div class="text-white cursor-pointer" @click="showLoginOverlay = true">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A7.5 7.5 0 0112 3.5a7.5 7.5 0 016.879 14.304A7.5 7.5 0 0112 21.5a7.5 7.5 0 01-6.879-3.696z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
          </div>
        </nav>
  
        <div v-if="showOverlay" class="fixed inset-0 bg-[#8E365E] bg-opacity-95 flex justify-start items-start z-20">
          <div class="bg-white w-64 p-6">
            <button @click="showOverlay = false" class="mb-4 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 1</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 2</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 3</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 4</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 5</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 6</a></li>
              <li class="mb-2"><a href="#" class="text-gray-700 hover:text-gray-900">Lien 7</a></li>
            </ul>
          </div>
        </div>
  
        <div v-if="showLoginOverlay" class="fixed inset-0 bg-[#8E365E] bg-opacity-95 flex justify-center items-center z-20">
          <div class="bg-white p-6 rounded-lg">
            <button @click="showLoginOverlay = false" class="mb-4 focus:outline-none">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h2 class="text-lg mb-4">Login</h2>
            <input type="text" placeholder="Username" class="mb-2 p-2 border rounded w-full">
            <input type="password" placeholder="Password" class="mb-2 p-2 border rounded w-full">
            <button class="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
          </div>
        </div>
      </div>
    `
  });
  