var bio = {
	"name" : "Justin Joseph",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" 	: "724-622-3844",
		"email" 	: "justin.joseph0@yahoo.com",
		"github" 	: "millennialsforchrist",
		"twitter" 	: "@GenY4Christ",
		"location"	: "Columbus, OH"
	},
	"welcomeMessage" : "Technology enthusiast seeking to break in to web development, using HTML5, CSS3, Javascript/jQuery, AJAX, PHP, AJAX, JSON, MYSQL, Twitter Bootstrap, and WordPress.",
	"skills" 		 : ['Ruby/Watir', 'HTML5', 'CSS3', 'Twitter Bootstrap', 'JavaScript/jQuery', 'JSON', 'AJAX', 'PHP', 'WordPress', 'Java', 'Oracle/MySQL/SQL Server', 'Git/GitHub'],
	"biopic" 		 : "images/biopic.jpg",
	display		 	 : function () {
		var name = HTMLheaderName.replace("%data%", bio.name);
		var role = HTMLheaderRole.replace("%data%", bio.role);

		var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var email = HTMLemail.replace("%data%", bio.contacts.email);
		var github = HTMLgithub.replace("%data%", bio.contacts.github);
		var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var city = HTMLlocation.replace("%data%", bio.contacts.location);
		var contacts = [mobile, email, github, twitter, city];

		var biopic = HTMLbioPic.replace("%data%", bio.biopic);

		var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$('#header').prepend(role).prepend(name);

		for (contact in contacts) {
			$('#topContacts').append(contacts[contact]);
			$('#footerContacts').append(contacts[contact]);
		}

		$('#header').append(biopic).append(welcomeMessage);

		$('#header').append(HTMLskillsStart);

		for (skill in bio.skills) {
			$('#skills').append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
};

var education = {
	"schools" : [
		{
			"name"		: "DeVry University",
			"location"	: "Columbus, OH",
			"degree"	: "Bachelor of Science",
			"majors"	: ["CIS"],
			"dates"		: 2007,
			"url"		: "http://www.devry.edu/"
		},
		{
			"name"		: "Center Area High School (now known as Central Valley)",
			"location"	: "Monaca, PA",
			"degree"	: "graduated with diploma",
			"majors"	: ["N/A"],
			"dates"		: 2004,
			"url"		: "http://www.centralvalleysd.org/"
		}
	],
	"onlineCourses" : [
		{
			"title"		: "Intro to HTML and CSS",
			"school"	: "Udacity",
			"date"		: 2015,
			"url" 		: "https://www.udacity.com/course/ud304"
		},
		{
			"title"		: "Responsive Web Design Fundamentals",
			"school"	: "Udacity",
			"date"		: 2015,
			"url" 		: "https://www.udacity.com/course/ud893"
		},
		{
			"title"		: "JavaScript Basics",
			"school"	: "Udacity",
			"date"		: 2015,
			"url" 		: "https://www.udacity.com/course/ud804"
		},
		{
			"title"		: "Intro to jQuery",
			"school"	: "Udacity",
			"date"		: 2015,
			"url" 		: "https://www.udacity.com/course/ud245"
		},
		{
			"title"		: "Front-end Foundations",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/front-end-foundations"
		},
		{
			"title"		: "Front-end Formations",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/front-end-formations"
		},
		{
			"title"		: "CSS Cross-Country",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/css-cross-country"
		},
		{
			"title"		: "Journey Into Mobile",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/journey-into-mobile"
		},
		{
			"title"		: "Blasting Off With Bootstrap",
			"school" 	: "Code School",
			"date"		: 2015,
			"url"		: "https://www.codeschool.com/courses/blasting-off-with-bootstrap"
		},
		{
			"title"		: "Assembling Sass",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/assembling-sass"
		},
		{
			"title"		: "Try Git",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/try-git"
		},
		{
			"title"		: "JavaScript Road Trip Part 1",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/javascript-road-trip-part-1"
		},
		{
			"title"		: "JavaScript Road Trip Part 2",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/javascript-road-trip-part-2"
		},
		{
			"title"		: "Try jQuery",
			"school"	: "Code School",
			"date"		: 2015,
			"url" 		: "https://www.codeschool.com/courses/try-jquery"
		},
		{
			"title"		: "Skillcrush 103: Introduction to WordPress",
			"school"	: "Skillcrush",
			"date"		: 2015,
			"url"		: "http://skillcrush.com/classes/introduction-wordpress/"
		},
		{
			"title"		: "Skillcrush 105: Git Safari",
			"school"	: "Skillcrush",
			"date"		: 2015,
			"url"		: "http://skillcrush.com/classes/git-safari/"
		},
		{
			"title"		: "Skillcrush 203: WordPress Professional Best Practices",
			"school"	: "Skillcrush",
			"date"		: 2015,
			"url"		: "http://skillcrush.com/classes/wordpress-professional-practices/"
		},
		{
			"title"		: "Boost Your Income With Boostrap to WordPress",
			"school"	: "Code College",
			"date"		: 2015,
			"url"		: "http://codecollege.ca/courses/bootstrap-to-wordpress"
		},
		{
			"title"		: "Make a Website",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/skills/make-a-website"
		},
		{
			"title"		: "Make an Interactive Webite",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/skills/make-an-interactive-website"
		},
		{
			"title"		: "HTML &amp; CSS",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/tracks/web"
		},
		{
			"title"		: "JavaScript",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/tracks/javascript"
		},
		{
			"title"		: "jQuery",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/tracks/jquery"
		},
		{
			"title"		: "PHP",
			"school"	: "Codecademy",
			"date"		: 2014,
			"url"		: "http://www.codecademy.com/en/tracks/php"
		}
	],
	display: function() {
		for (school in education.schools) {
			$('#education').append(HTMLschoolStart);

			var name = HTMLschoolName.replace("%data%", education.schools[school].name);
			var city = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var majors = HTMLschoolMajor.replace("%data%", education.schools[school].majors)

			$('.education-entry:last').append(name + degree + '\n' + dates + city + '\n' + majors);

			if (school == education.schools.length - 1) {
				$(HTMLonlineClasses).insertAfter('.education-entry:last');
			}
		}

		for (course in education.onlineCourses) {
			$('#education').append(HTMLonlineStart);

			var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			var date = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			var url = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

			$('.online-entry:last').append(title + school + '\n' + date + '\n' + url);
		}
	}
};

var work = {
	"jobs" : [
		{
			"employer"		: "Innovis",
			"title"			: "QA Lead &amp; Senior Automation Developer",
			"location"		: "Columbus, OH",
			"dates"			: "2008 - 2015",
			"description"	: "Currently serve as a QA Lead and automation developer. Code Ruby (Watir) scripts to interact with web applications, dynamically test front end markup and code and back end code, and compare results against functional and business requirements."
		},
		{
			"employer"		: "Market Day",
			"title"			: "Order Selector",
			"location"		: "Columbus, OH",
			"dates"			: "2004 - 2007",
			"description"	: "Fulfilled frozen foods orders in warehouse environment."
		},
		{
			"employer"		: "Project COE",
			"title"			: "Editor-in-Chief",
			"location"		: "Columbus, OH",
			"dates"			: "2005 - 2011",
			"description"	: "Authored and edited written content pertaining to gaming industry and lifestyle."
		}
	],
	display: function() {
		for (job in work.jobs) {
			$('#workExperience').append(HTMLworkStart);

			var employer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var city = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var dates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var description = HTMLworkDescription.replace("%data%", work.jobs[job].description)

			$('.work-entry:last').append(employer + ' ' + title + '\n' + dates + city + '\n' + description);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title"			: "Hello World",
			"dates"			: "2015",
			"description"	: "Intro project for Udacity FEWB Nanodegree",
			"images"		: ["images/intro-project.png"]
		},
		{
			"title"			: "Portfolio Site",
			"dates"			: "2015",
			"description"	: "First major project for Udacity FEWB Nanodegree",
			"images"		: ["images/portfolio-site.png"]
		},
		{
			"title"			: "Brighton Times",
			"dates"			: "2015",
			"description"	: "Responsive fundamentals project for Udacity FEWB Nanodegree",
			"images"		: ["images/responsive-fundamentals.png"]
		}
	],
	display: function() {
		for (project in projects.projects) {
			$('#projects').append(HTMLprojectStart);

			var title = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			var date = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			var description = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			var images = HTMLprojectImage.replace("%data%", projects.projects[project].images);

			$('.project-entry:last').append(title + '\n' + date + '\n' + description + '\n' + images);
		}
	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

function inName(name) {
	first = name.trim().split(" ")[0];
	last = name.split(" ")[1].toUpperCase();
	console.log(first + ' ' + last);
	return first + ' ' + last;
}