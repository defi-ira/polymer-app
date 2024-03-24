CREATE DATABASE "polymer";

\c polymer;

-- Create the 'chain_run' table if it doesn't exist
CREATE TABLE IF NOT EXISTS chain_run (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    chain_type VARCHAR(255) NOT NULL,
    image_size INT NOT NULL,
    run_id INT NOT NULL,
    start_time TIMESTAMPTZ NOT NULL,
    end_time TIMESTAMPTZ NOT NULL,
    local_machine_name VARCHAR(255) NOT NULL,
    local_port INT NOT NULL
);