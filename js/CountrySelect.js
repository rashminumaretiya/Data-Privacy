// // County select JS

const countrySelect = document.getElementById("countrySelect");
  const phoneCodeInput = document.getElementById("phoneCode");

  // Fetch country data from intl-tel-input library
  const countries = window.intlTelInputGlobals.getCountryData();

  // Populate <select> with country options
  function populateCountryOptions() {
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = `+${country.dialCode}`;
      option.textContent = `${country.name}`;
      countrySelect.appendChild(option);
    });
    
    // Set initial selected value
    countrySelect.value = "+91";
    updateCountryCode();
  }

  // Update phoneCode input when country changes
  function updateCountryCode() {
    phoneCodeInput.textContent = countrySelect.value;
    console.log('countrySelect.value', countrySelect.value)
  }

  // Call function to populate dropdown
populateCountryOptions();