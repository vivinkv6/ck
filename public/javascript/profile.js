function toggleEdit() {
  var profileDetails = document.getElementById("profileDetails");
  var editProfile = document.getElementById("editProfile");
  
  if (profileDetails.style.display === "none") {
    profileDetails.style.display = "block";
    editProfile.style.display = "none";
  } else {
    profileDetails.style.display = "none";
    editProfile.style.display = "block";
  }
}
