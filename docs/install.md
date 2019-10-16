# Installation

## Requirements

This package requires you to have both node and npm setup on your local machine. 
All other dependencies are installed when running `npm install` (see below).

It is recommended that you use [docker containers](https://docs.docker.com/compose/install/) for local development.

## Install Dependencies

Install all the project's dependencies using the following command:

```bash
cd backend; yarn;
cd ../frontend; yarn;
```

## Environment Configuration

You need to create a `.env` file in the `backend` dir by copying the provided `.env.sample`.
On a nix environment you can do this with the following command.

```bash
cd backend; cp .env.sample .env
```

Then open the file in your favourite text editor and fill in the blanks. The database credentials for
the provided MySQL Docker container are filled in already.

This file contains all the environment variables required for the various services that the project
uses, which contain secrets such as the API access key or database credentials. They are loaded into
the environment using `dotenv` in Node, and are accessible like any other environment variable through `process.env`.
