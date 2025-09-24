function showSection(id) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Sample Data
const scholarships = [
  { name: 'APSCHE UG Scholarship', eligibility: 'Any UG boys and girls in AP ', amount: '₹10,000', category: 'State', deadline: '30 Sept 2025',
    Details: 'This is mainly designed for the students to afford their monthly expenses.',
    Link: '<a href="https://jnanabhumi.ap.gov.in/" target="_blank">Click here</a>'
  },
  { name: 'Institutional Merit Scholarship', eligibility: 'Top 10%', amount: '₹20,000', category: 'Private', deadline: '15 Oct 2025',
       Details: 'It is a merit based Scholorship.'
},
  { name: 'National Talent Scholarship', eligibility: 'Any UG Students', amount: '₹15,000', category: 'Central', deadline: '10 Oct 2025',
Details: 'Checkout the official webpage for more details' ,Link: '<a href="https://www.myscheme.gov.in/schemes/nts-ug" target="_blank">Click here</a>'
   },
  {name : 'Reliance FOundation Scholorship', eligibility: 'All 1st year students of any field', amount:'50,000',category: 'Private', deadline:'02 Oct 2025',
       Details: 'It is a merit based Scholorship students should meet the eligibility criteria and attempt an virtual test.'
      ,Link: '<a href="https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx" target="_blank">Click here</a>'},
  { 
  name: 'Central Sector Scholarship Scheme', eligibility: 'Students with 80% and above in 12th',  amount: '₹12,000 per year', category: 'Central', deadline: '20 Oct 2025',
  Details: 'Awarded to meritorious students from economically weaker sections across India.',
  Link: '<a href="https://www.education.gov.in/en/scholarships-education-loan-0" target="_blank">Click here</a>' 
},
{ name: 'Pragati Scholarship for Girls', eligibility: 'Girls pursuing technical courses (AICTE approved)', amount: '₹30,000', category: 'Central', deadline: '05 Nov 2025',
  Details: 'Specially designed to support girl students pursuing diploma or degree level courses.' ,
  Link: '<a href="https://www.aicte.gov.in/schemes/students-development-schemes/Pragati/General-Instructions" target="_blank">Click here</a>'
},
{  name: 'JNTU Merit Scholarship', eligibility: 'Top 5% of students in each department', amount: '₹25,000', category: 'State', deadline: '12 Oct 2025',
  Details: 'Awarded by JNTU to outstanding performers every academic year.' ,
  Link: '<a href="https://www.jnu.ac.in/content/fellowshipsscholarships" target="_blank">Click here</a>'
},
{ name: 'ONGC Scholarship',eligibility: 'SC/ST students in professional courses', amount: '₹48,000 per year',  category: 'Private', deadline: '25 Oct 2025',
  Details: 'Sponsored by ONGC to encourage students from marginalized communities.' ,
  Link: '<a href="https://ongcscholar.org/?trk=public_post_reshare-text#/" target="_blank">Click here</a>'
},
{ name: 'AICTE Saksham Scholarship', eligibility: 'Differently-abled students pursuing technical education', amount: '₹50,000 per year', category: 'Central', deadline: '30 Nov 2025',
  Details: 'Aimed at supporting specially-abled students in AICTE approved institutions.' ,
  Link: '<a href="https://www.aicte.gov.in/schemes/students-development-schemes/Saksham/General-Instructions" target="_blank">Click here</a>'
},
{ name: 'Telangana ePASS Post-Matric Scholarship', eligibility: 'Students from Telangana belonging to SC/ST/BC/EBC/Minorities',  amount: 'Variable (tuition + maintenance)',  category: 'State', deadline: '18 Oct 2025',
  Details: 'Government of Telangana initiative to support students from economically weaker backgrounds.' ,
  Link: '<a href="https://telanganaepass.cgg.gov.in/SchoalrshipsOffered.do" target="_blank">Click here</a>'
}


];
const internships = [
  { role: 'Web Dev Intern', type: 'Part-time', paid: 'Paid', duration: '3 months', perks: 'Certificate', location: 'Hyderabad', suitableFor: '2nd and 3rd year students' },
{ role: 'Research Assistant', type: 'Full-time', paid: 'Unpaid', duration: '2 months', perks: 'Experience Letter', location: 'Bangalore', suitableFor: 'Final year (4th year) students interested in higher studies' },
{ role: 'App Dev Intern', type: 'Full-time', paid: 'Paid', duration: '6 months', perks: 'Stipend + Goodies', location: 'Chennai', suitableFor: '3rd and 4th year students' },
{ role: 'Data Science Intern', type: 'Full-time', paid: 'Paid', duration: '4 months', perks: 'Certificate + Stipend', location: 'Pune', suitableFor: '3rd year students with Python/ML basics' },
{ role: 'Cybersecurity Intern', type: 'Part-time', paid: 'Paid', duration: '3 months', perks: 'Certificate + Hands-on Projects', location: 'Delhi', suitableFor: '2nd and 3rd year students' },
{ role: 'UI/UX Designer Intern', type: 'Full-time', paid: 'Unpaid', duration: '2 months', perks: 'Portfolio Project + Letter of Recommendation', location: 'Mumbai', suitableFor: 'Any year students interested in design' },
{ role: 'Machine Learning Intern', type: 'Full-time', paid: 'Paid', duration: '6 months', perks: 'Stipend + Internship Certificate', location: 'Bangalore', suitableFor: '3rd and 4th year students with coding background' },
{ role: 'Cloud Computing Intern', type: 'Part-time', paid: 'Paid', duration: '3 months', perks: 'AWS Credits + Certificate', location: 'Hyderabad', suitableFor: '3rd year students' },
{ role: 'Content Writing Intern', type: 'Remote', paid: 'Unpaid', duration: '2 months', perks: 'Certificate + Flexible Hours', location: 'Work from Home', suitableFor: 'Any year students with writing skills' }


];
const clubs = [
  { name: 'Robotics Club Meetup',  date: 'Friday 6 PM', fee: 'Free Entry',location: 'Hyderabad', category: 'Technical', highlights: 'Live robot demos & hands-on mini project',
     registration: 'Limited seats, register at bit.ly/roboticsmeet', suitableFor: '2nd to 4th year engineering students' 
  },
  { name: 'Cultural Fest', date: '5th Sept, 10 AM', fee: '₹200', location: 'Bangalore', category: 'Cultural', highlights: 'Dance, music, food stalls & DJ night', 
    registration: 'On-the-spot registration available', suitableFor: 'All students, no restrictions' 
  }
];

const workshops = [
  {  name: 'AI & ML Workshop',  date: 'Sat 10 AM',  fee: '₹500',  location: 'IIT Hyderabad',  category: 'Technical',  highlights: 'Hands-on coding + certificate of participation', 
    registration: 'bit.ly/aimlworkshop2025', suitableFor: '3rd & 4th year students with Python knowledge' 
  },
  { name: 'Design Thinking Workshop', date: '24th Aug', fee: 'Free', location: 'Online', category: 'Innovation', highlights: 'Case studies + group brainstorming sessions', 
    registration: 'bit.ly/designthinking2025', suitableFor: 'Any year students interested in creativity & problem solving' 
  }
];


// ...........................closeModal.........................................................closeModal......closeModal.apply...closeModal......

// Populate Functions
function populateScholarships() {
  const header = document.getElementById('scholarshipHeader');
  header.innerHTML = `
     <div style="display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
      <img src="student.jpg" 
           alt="Scholarship Banner 1"
           style="max-height:400px; width:auto;border-radius: 15px;">
      <img src="student2.jpg" 
           alt="Scholarship Banner 2"
           style="max-height:400px; width:auto;border-radius: 15px;">
    </div>
  `;
  const container = document.getElementById('scholarshipCards');
  container.innerHTML = '';
  scholarships.forEach((s, i) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('scholarship', ${i})">
        <h3>${s.name}</h3>
        <p>💰 ${s.amount}</p>
        <p> 🚨Deadline: ${s.deadline}</p>
        <span class="badge ${s.category.toLowerCase()}">${s.category}</span>
      </div>`;
  });
}
function populateInternships() {
   const header = document.getElementById('internshipHeader');
  header.innerHTML = `
     <div style="display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
      <img src="intern1.jpg" 
           alt="Internship Banner 1"
           style="max-height:400px; width:auto;border-radius: 15px;">
      <img src="intern2.jpg" 
           alt="Internship Banner 2"
           style="max-height:400px; width:auto;border-radius: 15px;">
    </div>
    `;
  const container = document.getElementById('internshipCards');
  container.innerHTML = '';
  internships.forEach((i, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('internship', ${idx})">
        <h3>${i.role}</h3>
        <p>📌 ${i.type} | ${i.paid}</p>
        <p>📍 ${i.location}</p>
        <p>🎓 ${i.suitableFor}</p>
      </div>`;
  });
}
function populateClubs() {
    const header = document.getElementById('clubsHeader');
  header.innerHTML = `
     <div style="display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
      <img src="club1.jpg" 
           alt="Clubs Banner 1"
           style="max-height:400px; width:auto;border-radius: 15px;">
      <img src="club2.jpg" 
           alt="Clubs Banner 2"
           style="max-height:400px; width:auto;border-radius: 15px;">
    </div>
    `;
  const container = document.getElementById('clubCards');
  container.innerHTML = '';
  clubs.forEach((c, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('club', ${idx})">
        <h3>${c.name}</h3>
        <p>📅 ${c.date}</p>
        <p>📍 ${c.location}</p>
        <p>💰 ${c.fee}</p>

      </div>`;
  });
}
function populateWorkshops() {
    const header = document.getElementById('workshopHeader');
  header.innerHTML = `
     <div style="display:flex; justify-content:center; gap:20px; margin-bottom:20px;">
      <img src="workshop1.jpg" 
           alt="Workshop Banner 1"
           style="max-height:400px; width:auto;border-radius: 15px;">
      <img src="workshop2.jpg" 
           alt="Workshop Banner 2"
           style="max-height:400px; width:auto;border-radius: 15px;">
    </div>
    `;
  const container = document.getElementById('workshopCards');
  container.innerHTML = '';
  workshops.forEach((w, idx) => {
    container.innerHTML += `
      <div class="card" onclick="openModal('workshop', ${idx})">
        <h3>${w.name}</h3>
        <p>📅 ${w.date}</p>
        <p>📍 ${w.location}</p>
        <p>🎟 ${w.fee}</p>
      </div>`;
  });
}
// ..........................................................................................closeModal............closeModal.apply.apply......closeModal.........closeModal.
// Filters
function filterScholarships() {
  const cat = document.getElementById('scholarshipCategory').value;
  const container = document.getElementById('scholarshipCards');
  container.innerHTML = '';
  scholarships.forEach((s, i) => {
    if (!cat || s.category === cat) {
      container.innerHTML += `
        <div class="card" onclick="openModal('scholarship', ${i})">
          <h3>${s.name}</h3>
          <p>💰 ${s.amount}</p>
          <span class="badge ${s.category.toLowerCase()}">${s.category}</span>
        </div>`;
    }
  });
}
function filterInternships() {
  const type = document.getElementById('internshipType').value;
  const paid = document.getElementById('internshipPaid').value;
  const loc = document.getElementById('internshipLocation').value.toLowerCase();
  const container = document.getElementById('internshipCards');
  container.innerHTML = '';
  internships.forEach((i, idx) => {
    const okType = !type || i.type === type;
    const okPaid = !paid || i.paid === paid;
    const okLoc = !loc || i.location.toLowerCase().includes(loc);
    if (okType && okPaid && okLoc) {
      container.innerHTML += `
        <div class="card" onclick="openModal('internship', ${idx})">
          <h3>${i.role}</h3>
          <p>📌 ${i.type} | ${i.paid}</p>
          <p>📍 ${i.location}</p>
         
        </div>`;
    }
  });
}
function filterClubs() {
  const loc = document.getElementById('clubLocation').value.toLowerCase();
  const container = document.getElementById('clubCards');
  container.innerHTML = '';
  clubs.forEach((c, idx) => {
    if (!loc || c.location.toLowerCase().includes(loc)) {
      container.innerHTML += `
        <div class="card" onclick="openModal('club', ${idx})">
          <h3>${c.name}</h3>
          <p>📅 ${c.date}</p>
          <p>📍 ${c.location}</p>
        </div>`;
    }
  });
}
function filterWorkshops() {
  const loc = document.getElementById('workshopLocation').value.toLowerCase();
  const container = document.getElementById('workshopCards');
  container.innerHTML = '';
  workshops.forEach((w, idx) => {
    if (!loc || w.location.toLowerCase().includes(loc)) {
      container.innerHTML += `
        <div class="card" onclick="openModal('workshop', ${idx})">
          <h3>${w.name}</h3>
          <p>📅 ${w.date}</p>
          <p>📍 ${w.location}</p>
        </div>`;
    }
  });
}

// .......................................................................................closeModal......closeModal.apply...............closeModal......
// Modal Handling
function openModal(type, index) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  modal.style.display = 'block';
  
  if (type === 'scholarship') {
    const s = scholarships[index];
    modalBody.innerHTML = `
      <h2>${s.name}</h2>
      <p>📝 Eligibility: ${s.eligibility}</p>
      <p>💰 Amount: ${s.amount}</p>
      <p>📅 Deadline: ${s.deadline}</p>
      <p>🗒️ Details: ${s.Details}</p>
            <p>🗒️ Link: ${s.Link}</p>

      <button onclick="alert('You have registered successfully!')">Register</button>
    `;
  }
  if (type === 'internship') {
    const i = internships[index];
    modalBody.innerHTML = `
      <h2>${i.role}</h2>
      <p>📌 Type: ${i.type} | ${i.paid}</p>
      <p>⏳ Duration: ${i.duration}</p>
      <p>🎁 Perks: ${i.perks}</p>
      <p>📍 Location: ${i.location}</p>
      <p>🎓 Suitable For: ${i.suitableFor}</p>
      <button onclick="alert('You have registered successfully!')">Apply</button>
    `;
  }
  if (type === 'club') {
    const c = clubs[index];
    modalBody.innerHTML = `
      <h2>${c.name}</h2>
      <p>📅 Date: ${c.date}</p>
      <p>🎟 Fee: ${c.fee}</p>
      <p>📍 Location: ${c.location}</p>
     
<p>🎭  Ctaegory: ${c.category}</p>
<p>🌟 Highlight: ${c.highlights}</p>
<p>📝 Registration: ${c.registration}</p>
<p>🎓 Suitable For: ${c.suitableFor}</p>
      <button onclick="alert('You have registered successfully!')">Register</button>
    `;
  }
  if (type === 'workshop') {
    const w = workshops[index];
    modalBody.innerHTML = `
      <h2>${w.name}</h2>
      <p>📅 Date: ${w.date}</p>
      <p>🎟 Fee: ${w.fee}</p>
      <p>📍 Location: ${w.location}</p>
<p>⭐ Highlights: ${w.highlights}</p>
<p>👥 Suitable for: ${w.suitable}</p>
      <button onclick="alert('You have registered successfully!')">Register</button>
    `;
  }
}
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Load data initially
populateScholarships();
populateInternships();
populateClubs();
populateWorkshops();


