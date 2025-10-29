# Jeevi-
Portfolio 
!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Portfolio - [Your Name]</title>

  <style>

    * {

      box-sizing: border-box;

      margin: 0;

      padding: 0;

      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

    }



    html {

      scroll-behavior: smooth;

    }



    body {

      line-height: 1.6;

      background-color: #f4f4f4;

      color: #333;

    }



    .container {

      width: 90%;

      max-width: 1100px;

      margin: auto;

      padding: 20px 0;

    }



    header {

      background: #333;

      color: #fff;

    }



    header nav ul {

      list-style: none;

      display: flex;

      justify-content: flex-end;

      gap: 20px;

      padding: 20px;

    }



    header nav a {

      color: #fff;

      text-decoration: none;

      font-weight: bold;

    }



    .hero {

      background: #0077cc;

      color: #fff;

      padding: 50px 0;

      text-align: center;

    }



    .profile-pic {

      width: 150px;

      height: 150px;

      object-fit: cover;

      border-radius: 50%;

      border: 4px solid white;

      margin-bottom: 20px;

      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    }



    .btn {

      display: inline-block;

      margin-top: 20px;

      padding: 10px 20px;

      background-color: #fff;

      color: #0077cc;

      text-decoration: none;

      font-weight: bold;

      border-radius: 5px;

    }



    section {

      padding: 40px 0;

    }



    h2 {

      margin-bottom: 20px;

    }



    .project-grid {

      display: grid;

      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

      gap: 20px;

    }



    .project-card {

      background: #fff;

      padding: 20px;

      border-radius: 8px;

      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    }



    form input, form textarea {

      width: 100%;

      padding: 10px;

      margin-bottom: 15px;

      border-radius: 4px;

      border: 1px solid #ccc;

    }



    form button {

      background: #0077cc;

      color: #fff;

      border: none;

      padding: 10px 20px;

      cursor: pointer;

      border-radius: 4px;

    }



    footer {

      background: #333;

      color: #fff;

      text-align: center;

      padding: 20px 0;

    }

  </style>

</head>

<body>



<header>

  <nav class="container">

    <ul>

      <li><a href="#about">About</a></li>

      <li><a href="#education">Education</a></li>

      <li><a href="#certificates">Certificates</a></li>

      <li><a href="#projects">Projects</a></li>

      <li><a href="#contact">Contact</a></li>

    </ul>

  </nav>

</header>



<section class="hero">

  <div class="container">

    <img src="jazlejazle.jpg" alt="Your Photo" class="profile-pic" />

    <h2>Hi, I'm [Your Name]</h2>

    <p>Web Developer | Designer | student</p>

    <a href="#projects" class="btn">View Projects</a>

  </div>

</section>



<section id="about" class="about">

  <div class="container">

    <h2>About Me</h2>

    <p>I am a web developer with a passion for creating beautiful and functional websites. I enjoy turning complex problems into simple, elegant solutions.</p>

  </div>

</section>



<section id="education" class="education">

  <div class="container">

    <h2>Education & Qualifications</h2>

    <ul>

      <li><strong>Bachelor of Computer Science</strong> - university of Madras (2024 - 2027)</li>

      <li><strong>High School</strong> - ABC School (2022 - 2024)</li>

    </ul>

  </div>

</section>



<section id="certificates" class="certificates">

  <div class="container">

    <h2>Certificates</h2>

    <ul>

      <li>HTML & CSS Certificate - FreeCodeCamp</li>

      <li>JavaScript Certificate - Coursera</li>

      <li>Responsive Web Design - Google Developer Program</li>

    </ul>

  </div>

</section>



<section id="projects" class="projects">

  <div class="container">

    <h2>Projects</h2>

    <div class="project-grid">

      <div class="project-card">

        <h3>Project One</h3>

        <p>A short description of your project.</p>

      </div>

      <div class="project-card">

        <h3>Project Two</h3>

        <p>A short description of your project.</p>

      </div>

    </div>

  </div>

</section>



<section id="contact" class="contact">

  <div class="container">

    <h2>Contact Me</h2>

    <form id="contactForm">

      <input type="text" placeholder="Your Name" required />

      <input type="email" placeholder="Your Email" required />

      <textarea placeholder="Your Message" required></textarea>

      <button type="submit">Send</button>

    </form>

    <p id="formStatus"></p>

  </div>

</section>



<footer>

  <div class="container">

    <p>&copy; 2025 YourName. All rights reserved.</p>

  </div>

</footer>



<script>

  // Basic form submission script (can be expanded)

  const form = document.getElementById('contactForm');

  const status = document.getElementById('formStatus');



  form.addEventListener('submit', function (e) {

    e.preventDefault();

    status.textContent = 'Thank you for reaching out!';

    form.reset();

  });

</script>



</body>

</html>
