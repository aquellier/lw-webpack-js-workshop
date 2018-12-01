import flatpickr from 'flatpickr';


const parseDate = (string) => {
  const pattern = /(\d{2})-(\d{2})-(\d{4})/;
  return new Date(string.replace(pattern,'$3-$2-$1'));
}

function updateCosts(startDateInput, endDateInput) {
  const startDate = parseDate(startDateInput.value);
  const endDate = parseDate(endDateInput.value);
  const hoursField = document.getElementById('hours');
  const priceField = document.getElementById('price');
  const fee = document.getElementById('service-fee');
  const totalPrice = document.getElementById('total-price');
  let hours = Math.ceil((endDate - startDate) / (1000 * 3600 * 24)) * 6;
  hoursField.innerHTML = hours;
  const hourPrice = document.querySelector('.costs').dataset.rate;
  console.log(hourPrice);
  const basePrice = priceField.innerHTML = hours * hourPrice;
  const feePrice = fee.innerHTML = priceField.innerHTML * 0.15;
  totalPrice.innerHTML = basePrice + feePrice;
}

function addCosts() {
  const costs = document.querySelector('.costs');
  costs.classList.add('is-visible');
}

function removeCosts() {
  const costs = document.querySelector('.costs');
  costs.classList.remove('is-visible');
}

function calendar() {
  const startDateInput = document.getElementById('booking_start_date');
  const endDateInput = document.getElementById('booking_end_date');
  if (startDateInput && endDateInput) {
    console.log('Hello from flatpickr');
    flatpickr(startDateInput, {
      minDate: 'today',
      dateFormat: 'd-m-Y',
      onChange: function(_, selectedDate) {
        // DO SOMETHING
        if(selectedDate === '') {
          return endDateInput.disabled = true;
        }
        removeCosts();
        endDateInputCalendar.set('minDate', selectedDate);
        endDateInput.disabled = false;
      }
    });
    const endDateInputCalendar =
    flatpickr(endDateInput, {
      dateFormat: 'd-m-Y',
      onChange: (_, selectedDate) => {
        if(selectedDate !== '') {
          addCosts();
          updateCosts(startDateInput, endDateInput);
        }
      }
    });
  }
}

export { calendar };

