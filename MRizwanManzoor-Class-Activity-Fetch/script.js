fetch("https://api.github.com/users/m-rizwan-manzoor")
  .then((response) => response.json())
  .then((json) => {
    document.getElementById("avatar-img").src = json.avatar_url;
    document.getElementById("user-name").textContent = json.name;
    document.getElementById("user-bio").textContent = json.bio;
    document.getElementById("user-url").textContent = json.html_url;
    document.getElementById("view-profile").href = json.html_url;
  });
