-- TENANTS TABLE
CREATE TABLE IF NOT EXISTS tenants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- USERS TABLE
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  tenant_id INTEGER REFERENCES tenants(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  tenant_id INTEGER REFERENCES tenants(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- TASKS TABLE
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  status VARCHAR(20) DEFAULT 'OPEN',
  project_id INTEGER REFERENCES projects(id),
  tenant_id INTEGER REFERENCES tenants(id),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SEED DATA
INSERT INTO tenants (name) VALUES ('Tenant One');

INSERT INTO users (email, password, tenant_id)
VALUES ('test@test.com', '123456', 1);

INSERT INTO projects (name, tenant_id)
VALUES ('Demo Project', 1);

INSERT INTO tasks (title, project_id, tenant_id)
VALUES ('Demo Task 1', 1, 1);
