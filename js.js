function aboutSlide()
{	
	var img1 = document.getElementById("about-img");
	var img2 = document.getElementById("resume-img");
	var img3 = document.getElementById("projects-img");
	var img4 = document.getElementById("contact-img");
	
	img2.style.transition = "opacity .75s ease-out 0s";	
	img2.style.opacity = 0;
	img3.style.transition = "opacity .75s ease-out 0s";
	img3.style.opacity = 0;
	img4.style.transition = "opacity .75s ease-out 0s";
	img4.style.opacity = 0;

	img1.style.transition = "left .75s ease-out 0s";
	img1.style.left = "480px";
	img1.style.top = "166px";
	
	setTimeout(continueAboutExecution, 1000);
}

function continueAboutExecution()
{
	window.location.href = "about.html";
}

function resumeSlide()
{	
	var img1 = document.getElementById("about-img");
	var img2 = document.getElementById("resume-img");
	var img3 = document.getElementById("projects-img");
	var img4 = document.getElementById("contact-img");
	
	img1.style.transition = "opacity .75s ease-out 0s";	
	img1.style.opacity = 0;
	img3.style.transition = "opacity .75s ease-out 0s";
	img3.style.opacity = 0;
	img4.style.transition = "opacity .75s ease-out 0s";
	img4.style.opacity = 0;

	img2.style.transition = "left .75s ease-out 0s";
	img2.style.left = "480px";
	img2.style.top = "166px";
	
	setTimeout(continueResumeExecution, 1000);
}

function continueResumeExecution()
{
	window.location.href = "resume.html";
}

function projectsSlide()
{	
	var img1 = document.getElementById("about-img");
	var img2 = document.getElementById("resume-img");
	var img3 = document.getElementById("projects-img");
	var img4 = document.getElementById("contact-img");
	
	img1.style.transition = "opacity .75s ease-out 0s";	
	img1.style.opacity = 0;
	img2.style.transition = "opacity .75s ease-out 0s";
	img2.style.opacity = 0;
	img4.style.transition = "opacity .75s ease-out 0s";
	img4.style.opacity = 0;

	img3.style.transition = "left .75s ease-out 0s";
	img3.style.left = "480px";
	img3.style.top = "166px";
	
	setTimeout(continueProjectsExecution, 1000);
}

function continueProjectsExecution()
{
	window.location.href = "projects.html";
}

function contactSlide()
{	
	var img1 = document.getElementById("about-img");
	var img2 = document.getElementById("resume-img");
	var img3 = document.getElementById("projects-img");
	var img4 = document.getElementById("contact-img");
	
	img1.style.transition = "opacity .75s ease-out 0s";	
	img1.style.opacity = 0;
	img2.style.transition = "opacity .75s ease-out 0s";
	img2.style.opacity = 0;
	img3.style.transition = "opacity .75s ease-out 0s";
	img3.style.opacity = 0;
	
	img4.style.transition = "left .75s ease-out 0s";
	img4.style.left = "480px";
	img4.style.top = "166px";
	
	setTimeout(continueContactExecution, 1000);
}

function continueContactExecution()
{
	window.location.href = "contact.html";
}