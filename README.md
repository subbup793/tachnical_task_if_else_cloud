# Technical tack if else cloud

This Node.js project implements an interplanetary communication (earth mars communication) system that allows users on Earth to send messages to users on Mars using a special numeric keypad. The project converts plain English sentences into a series of numeric codes and vice versa.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/interplanetary-communication.git
   ```

2. Navigate to the project directory:

   cd interplanetary-communication

3. Install the dependencies:
   npm install

## Usage

1. Start the server:
   npm start
2. Access the API endpoints using a tool like Postman or a web browser.
3. Test the following routes:

`/earth-mars-comm/message`: Convert an English sentence to a numeric message.
`/mars-earth-comm/message`: Convert a numeric message to an English sentence.

## API Endpoints

1.  `POST /earth-mars-comm/message`: Convert an English sentence to a numeric message.
    Request:

        {
        "Response_from_Earth" : "houston do you copy"
        }

    Response:

        {
        "Response_from_Earth": "houston do you copy",
        "Nokia_Translation": "44666887777866666_3666_99966688_2226667999"
        }

2.  `POST /mars-earth-comm/message`: Convert a numeric message to an English sentence.
    Request:

        {
        "Response_from_Mars": "44666887777866666_3666_99966688_2226667999"
        }

    Response:
        {
        "Response_from_Mars": "44666887777866666_3666_99966688_2226667999",
        "Nokia_Translation": "houstdoyoucopy"
        }

## Dependencies

1. Node.js
2. Express.js
3. Mongoose

## Contributing

Contributions are welcome! If you find any issues or have improvements to suggest, please open an issue or a pull request on GitHub.
