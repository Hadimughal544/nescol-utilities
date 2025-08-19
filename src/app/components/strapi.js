const formData = {
  data: {
    service: "energy",
    supplier: "Example Supplier",
    MPAN: 123456789,
    MPRN: 987654321,
    expiry_date: "2025-08-15"
  }
};

const response = await fetch("http://localhost:1337/api/first-forms", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(formData)
});

const result = await response.json();
console.log(result);
