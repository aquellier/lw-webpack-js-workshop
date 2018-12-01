function toggleIcon(event) {
  event.target.classList.toggle('fas');
  event.target.classList.toggle('far');
}

function bookMarking() {
  console.log('hello from bookmarking.js');
  const bookmarkingIcons = document.querySelectorAll('.dev-bookmark');
  if (bookmarkingIcons) {
    console.log(bookmarkingIcons);
    bookmarkingIcons.forEach((icon) => {
      icon.addEventListener('click', (event) => {
          let devId = event.target.parentElement.parentElement.id.split('-')[1];
          console.log(devId);
          fetch('/bookmarked_developers', {
            method: 'post',
            body: JSON.stringify({developer_id: devId}),
            headers: {
              'Content-Type': 'application/json',
              'X-CSRF-Token': Rails.csrfToken()
            },
            credentials: 'same-origin'
          }).then(() => toggleIcon(event))
          // bookmarking.classList.toggle(".dev-bookmark-black");
      });
    })
  }
}

export { bookMarking };
