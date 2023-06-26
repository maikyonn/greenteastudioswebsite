<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="drawer">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label for="my-drawer-4" class="drawer-button btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            /></svg
          >
        </label>
      </div>
      <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay" />
        <ul class="menu p-4 w-80 h-full bg-base-200 text-base-content">
          <!-- Sidebar content here -->
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="navbar-center">
    <h1 class=" m-4 text-3xl font-bold">CommuniTea</h1>
  </div>

  <div class="navbar-end">
    <button class="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        /></svg
      >
    </button>
    <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          /></svg
        >
        <span class="badge badge-xs badge-primary indicator-item" />
      </div>
    </button>
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="src\assets\pfp.png" />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="carousel rounded-box h-96 mx-16">
  <div class="carousel-item">
    <div class="hero" style="background-image: url(/src/assets/blur.png);">
      <div class="hero-overlay bg-opacity-60" />
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Featured Art</h1>
          <p class="mb-5">
            Each painting in our gallery has been meticulously hand-picked to
            showcase the captivating work of rising artists.
          </p>
          <button class="btn btn-primary normal-case">Explore</button>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <img src="src\assets\1.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\2.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\3.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\4.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\5.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\6.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\7.jpg" alt="Burger" />
  </div>
</div>

<div class="join">
  <div class="carousel rounded-box h-96 m-4 w-54">
    <div class="carousel-item mx-4">
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="src\assets\5.png" alt="Shoes" /></figure>
        <div class="card-body mt-20">
          <h2 class="card-title">
            <h1 class=" m-4 text-5xl font-bold">Artist Stories</h1>
          </h2>

          <p>
            In a world where colors were forbidden, an artist dared to paint the
          </p>
          <p>forbidden hues, embarking on a clandestine odyssey to unveil a</p>
          <p>kaleidoscope of emotions that would ignite a revolution of</p>
          <p>imagination.</p>

          <div class="card-actions mt-4">
            <button class="btn btn-accent">Read More</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel rounded-box h-96 m-4 w-96">
    <div class="carousel-item mx-4 w-96">
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="src\assets\9.jpg" alt="Shoes" /></figure>
        <div class="card-body mt-36">
          <h2 class="card-title">
            <div class="avatar">
              <div class="w-24 rounded">
                <img src="src\assets\1.png" />
              </div>
            </div>
            <h1 class=" m-4 text-5xl font-bold">Maple</h1>
          </h2>

          <p>
            Her art is like a kaleidoscope of emotions that would ignite a
            revolution of
          </p>
          <p>imagination.</p>
          <button class="btn btn-primary w-32 m-4">See Profile</button>
          <div class="card-actions justify-end" />
        </div>
      </div>
    </div>
  </div>
  <div class="carousel rounded-box h-96 m-4">
    <div class="carousel-item mx-4">
      <div class="card bg-base-100 shadow-xl image-full">
        <figure><img src="src\assets\7.jpg" alt="Shoes" /></figure>
        <div class="card-body mt-36">
          <h2 class="card-title">
            <div class="avatar">
              <div class="w-24 rounded">
                <img src="src\assets\pfp.png" />
              </div>
            </div>
            <h1 class=" m-4 text-5xl font-bold">Michael Vu</h1>
          </h2>

          <p>Her art is like a kaleidoscope of emotions that would ignite a</p>
          <p>revolution of imagination.</p>
          <button class="btn btn-primary w-32 m-4">See Profile</button>
          <div class="card-actions justify-end" />
        </div>
      </div>
    </div>
  </div>
</div>
<div class="carousel h-96 mx-8">
  <div class="carousel-item h-3">
    <div class="card bg-base-100 shadow-xl image-full h-96">
      <figure><img src="src\assets\9.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          <div class="avatar">
            <div class="w-24 rounded">
              <img src="src\assets\pfp2.png" />
            </div>
          </div>
          <h1 class=" m-4 text-5xl font-bold">Artist: Jacki Li</h1>
        </h2>

        <p>
          With a paintbrush in hand and a heart full of hope, she transformed
          the
        </p>
        <p>
          barren trees in her community into vibrant masterpieces, breathing
          life
        </p>

        <div class="card-actions justify-end">
          <button class="btn btn-primary">View Profile</button>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item h-96">
    <img src="src\assets\8.jpg" alt="Burger" />
  </div>
  <div class="carousel-item h-96">
    <img src="src\assets\10.jpg" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\11.jpg" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\12.jpg" alt="Burger" />
  </div>
</div>

<div class="carousel rounded-box h-96 mx-8">
  <div class="carousel-item h-3">
    <div class="card bg-base-100 shadow-xl image-full h-96">
      <figure><img src="src\assets\15.jpg" alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          <div class="avatar">
            <div class="w-24 rounded">
              <img src="src\assets\pfp3.jpg" />
            </div>
          </div>
          <h1 class=" m-4 text-5xl font-bold">Artist: Wenjun Lin</h1>
        </h2>

        <p>
          Amidst the majestic mountains, she found solace in the company of wild
        </p>
        <p>
          creatures, capturing their untamed spirit on her canvas with strokes
        </p>
        <p>of passion and reverence; as her artwork bloomed, so did her</p>
        <p>
          connection to nature, igniting a fire within her soul that propelled
        </p>
        <p>her on a transformative journey</p>

        <div class="card-actions justify-end">
          <button class="btn btn-primary">View Profile</button>
        </div>
      </div>
    </div>
  </div>
  <div class="carousel-item">
    <img src="src\assets\13.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\14.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\15.jpg" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\16.png" alt="Burger" />
  </div>
  <div class="carousel-item">
    <img src="src\assets\17.png" alt="Burger" />
  </div>
</div>
