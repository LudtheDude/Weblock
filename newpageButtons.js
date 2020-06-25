function addWebsite(){
    //var website = document.getElementById('websites-to-block').value;
    //document.getElementById("websites-to-block").value = '';
    console.log(document.getElementById('websites-to-block').value);
}


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('add-website').addEventListener('click', addWebsite);
    main();
  });