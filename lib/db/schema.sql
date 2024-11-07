-- Users Table
CREATE TABLE DebitUsers (
                       user_id UUID PRIMARY KEY,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password_hash VARCHAR(255) NULL,
                       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- Indexes for Users table
CREATE INDEX idx_users_email ON DebitUsers(email);

-- Incomes Table
CREATE TABLE Incomes (
                         income_id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                         user_id UUID REFERENCES DebitUsers(user_id) ON DELETE CASCADE,
                         amount DECIMAL(10, 2) NOT NULL,
                         source VARCHAR(100),
                         income_date DATE NOT NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Incomes table
CREATE INDEX idx_incomes_user_id ON Incomes(user_id);
CREATE INDEX idx_incomes_income_date ON Incomes(income_date);

-- Budgets Table
CREATE TABLE Budgets (
                         budget_id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                         user_id UUID REFERENCES DebitUsers(user_id) ON DELETE CASCADE,
                         category VARCHAR(100) NOT NULL,
                         amount DECIMAL(10, 2) NOT NULL,
                         cadence VARCHAR(20) CHECK (cadence IN ('daily', 'weekly', 'monthly', 'yearly')),
                         start_date DATE NOT NULL,
                         end_date DATE NOT NULL,
                         remaining_amount DECIMAL(10, 2) NOT NULL,
                         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                         updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for Budgets table
CREATE INDEX idx_budgets_user_id ON Budgets(user_id);
CREATE INDEX idx_budgets_category ON Budgets(category);
CREATE INDEX idx_budgets_cadence ON Budgets(cadence);

-- Expenses Table
CREATE TABLE Expenses (
                          expense_id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
                          user_id UUID REFERENCES DebitUsers(user_id) ON DELETE CASCADE,
                          budget_id INT REFERENCES Budgets(budget_id) ON DELETE SET NULL,
                          amount DECIMAL(10, 2) NOT NULL,
                          description VARCHAR(255),
                          expense_date DATE NOT NULL,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

-- Indexes for Expenses table
CREATE INDEX idx_expenses_user_id ON Expenses(user_id);
CREATE INDEX idx_expenses_budget_id ON Expenses(budget_id);
CREATE INDEX idx_expenses_expense_date ON Expenses(expense_date);

-- View for Dashboard Summary
CREATE MATERIALIZED VIEW Dashboard_Summary AS
SELECT
    u.user_id,
    COALESCE(SUM(i.amount), 0) AS total_income,
    COALESCE(SUM(e.amount), 0) AS total_expenditure,
    (COALESCE(SUM(i.amount), 0) - COALESCE(SUM(e.amount), 0)) AS balance,
    COALESCE(SUM(b.remaining_amount), 0) AS remaining_budget
FROM
    DebitUsers u
        LEFT JOIN Incomes i ON u.user_id = i.user_id
        LEFT JOIN Expenses e ON u.user_id = e.user_id
        LEFT JOIN Budgets b ON u.user_id = b.user_id
GROUP BY u.user_id;

-- Indexes for Dashboard_Summary view
CREATE INDEX idx_dashboard_user_id ON Dashboard_Summary(user_id);
