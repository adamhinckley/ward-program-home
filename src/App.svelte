<script>
  import logo from './assets/book-open-svgrepo-com.svg';
</script>

<main>
  <header class=''>
    <a href='https://app.wardprogram.com/login' class="button button-outline">Admin Login</a>
  </header>
  <section class="hero">
    <div class="logo-container">
      <img src={logo} alt="Ward Program" class="logo" />
      <span class="product-name">Ward Program</span>
    </div>
    <h1>plain like paper</h1>
    <p class="tagline">No need to be complicated.</p>
  </section>

  <section class="content">
    <div class="feature">
      <h2>Edit your weekly program</h2>
      <p>Create and manage your church congregation's weekly program. It's simple, straightforward, and easy to use.</p>
    </div>

    <div class="feature">
      <h2>Private and secure</h2>
      <p>Your congregation information stays private. We don't make your details public or searchable by anyone.</p>
    </div>

    <div class="feature">
      <h2>QR code for your church</h2>
      <p>Generate a QR code to display in your church. Members can scan it to access the program on their phones.</p>
    </div>
  </section>

  <section class="cta">
    <div class="demo-buttons">
      <a href="https://app.wardprogram.com/demo/program"  rel="noopener noreferrer" class="button button-outline">View Program Demo</a>
      <a href="https://app.wardprogram.com/demo/editor"  rel="noopener noreferrer" class="button button-outline">View Editor Demo</a>
    </div>
  </section>

  <footer>
    <p>We are not taking new signups at this time in order to keep it free for the congregations that do use it.  If you know someone using this, find out how they got access and ask for help.</p>
  </footer>
</main>

<style>
  header {
    display: flex;
    justify-content: flex-end;
  }
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    max-width: 100%;
  }

  .hero {
    text-align: center;
    padding: 3rem 1rem;
    margin-bottom: 3rem;
  }

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .logo {
    width: 2rem;
    height: 2rem;
    display: block;
  }

  .product-name {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.05em;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .tagline {
    font-size: 1.125rem;
    font-weight: 400;
    margin: 0;
    opacity: 0.8;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .feature {
    text-align: center;
    padding: 2rem 1.5rem;
    border: 1px solid #000;
  }

  .feature h2 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 0 1rem 0;
    letter-spacing: 0.02em;
  }

  .feature p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta {
    text-align: center;
    padding: 2rem 1rem;
  }

  .demo-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }

  .button {
    display: inline-block;
    padding: 0.875rem 2rem;
    border: 2px solid #000;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    transition: background-color 0.2s ease, color 0.2s ease;
    cursor: pointer;
  }

  .button-outline {
    background-color: #fff;
    color: #000;
  }

  .button-outline:hover {
    background-color: #f5f5f5;
    color: #000;
  }

  .button:hover {
    background-color: #333;
    color: #fff;
  }

  footer {
    text-align: center;
  }

  /* Tablet and up */
  @media (min-width: 768px) {
    main {
      padding: 3rem 2rem; 
    }

    header {
      display: flex;
      justify-content: flex-end;
    }

    .hero {
      padding: 4rem 2rem;
      margin-bottom: 4rem;
    }

    h1 {
      font-size: 4rem;
    }

    .tagline {
      font-size: 1.25rem;
    }

    .logo {
      width: 2.5rem;
      height: 2.5rem;
    }

    .product-name {
      font-size: 1.75rem;
    }

    .content {
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .feature h2 {
      font-size: 1.75rem;
    }

    .feature p {
      font-size: 1.125rem;
    }

    .demo-buttons {
      flex-direction: row;
      justify-content: center;
      gap: 1.5rem;
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    
    main {
      padding: 4rem 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero {
      padding: 5rem 2rem;
      margin-bottom: 5rem;
    }

    h1 {
      font-size: 5rem;
    }

    .tagline {
      font-size: 1.5rem;
    }

    .logo {
      width: 3rem;
      height: 3rem;
    }

    .product-name {
      font-size: 2rem;
    }

    .content {
      flex-direction: row;
      gap: 3rem;
      align-items: flex-start;
    }

    .feature {
      flex: 1;
    }

    .feature h2 {
      font-size: 1.5rem;
    }
  }
</style>
