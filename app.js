const packages = [
  {heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs'}, 
  {heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk'}, 
  {heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147'}, 
  {heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145'}, 
  {heavy: true, priority: true, fragile: true, to: 'Brittany'}, 
  {heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz'}, 
  {heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367'}]

let currentPackages = [];
let lostPackage = [];
let score = 0;
currentPackages = packages;


function draw() {
    let rowElm = document.getElementById('package-display');
    let template = '';

    currentPackages.forEach(pk => {
      template += `
        <div onclick='scoreUp()' class="col-md-3 col-6 card bg-light py-3 border-dark border-2 rounded shadow">
          <h3>To: ${pk.to}</h3>
          <h5>Tracking #: ${pk.trackingNumber}</h5>
          <h6>heavy: ${pk.heavy}</h6>
          <h6>priority: ${pk.priority}</h6>
          <h6>fragile: ${pk.fragile}</h6>
        </div>`
    })
    console.log(currentPackages); 
    document.getElementById('score-counter').innerText = score;
    rowElm.innerHTML = template;
  }

function losePackage() {
  let inx = Math.floor(Math.random() * packages.length);
  console.log(inx);
  currentPackages[inx].lost = true;
  lostPackage = currentPackages[inx];
  console.log(currentPackages[inx].to + ' lost their package'); 
}

function filter(attr) {

  // let filteredPackages = currentPackages.filter(p => p[attr] == true ); Implied
  // debugger
  let filteredPackages = currentPackages.filter(p => { // explicit
    if (p[attr] == lostPackage[attr] &! undefined) {
      return true
    }
  });

  console.log(filteredPackages + 'filtered packages'); 

  currentPackages = filteredPackages;
  draw();
}

function reset() {
  currentPackages = packages;
  score = 0;
  draw();
}


// function scoreUp(name) {
  
//   if (name == )

//   document.getElementById('score-counter').innerText = score;
// }

losePackage();
draw();