-- ==========================================
-- 1. ROLES
-- ==========================================
INSERT INTO role (id, name) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_ORGANIZER'),
(3, 'ROLE_PARTICIPANT'),
(4, 'ROLE_JUDGE');

-- ==========================================
-- 2. USERS (Passswords are BCrypt hashed for 'Password123!')
-- ==========================================
INSERT INTO app_user (id, email, password_hash, display_name, created_at, updated_at) VALUES
('usr-admin-01', 'admin@hackathon.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'System Admin', NOW(), NOW()),
('usr-org-01',   'organizer@hackathon.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Sarah Organizer', NOW(), NOW()),
('usr-judge-01', 'judge1@hackathon.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Dr. Alex Judge', NOW(), NOW()),
('usr-judge-02', 'judge2@hackathon.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Elena Tech Lead', NOW(), NOW()),
('usr-part-01',  'alice@dev.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Alice Chen', NOW(), NOW()),
('usr-part-02',  'bob@dev.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Bob Smith', NOW(), NOW()),
('usr-part-03',  'charlie@dev.com', '$2a$10$7Q3J7J3eE.N2qGZ91R6WNe1D70UuB4p42k4Q4lQ4lQ4lQ4lQ4lQ4l', 'Charlie Brown', NOW(), NOW());

-- ==========================================
-- 3. HACKATHONS
-- ==========================================
INSERT INTO hackathon (id, name, starts_at, submission_deadline) VALUES 
('hack-01', 'AI & Cloud Global Hackathon 2026', NOW() + INTERVAL 7 DAY, NOW() + INTERVAL 21 DAY), 
('hack-02', 'Web3 & Security Buildathon', NOW() + INTERVAL 14 DAY, NOW() + INTERVAL 21 DAY);


-- ==========================================
-- 4. EVENT ROLES (Scoped user privileges per hackathon)
-- ==========================================
INSERT INTO event_role (user_id, hackathon_id, role_id , assigned_at) VALUES
('usr-org-01',   'hack-01', 2 , NOW()), -- Organizer for AI Hackathon
('usr-judge-01', 'hack-01', 4 , NOW()), -- Judge 1 for AI Hackathon
('usr-judge-02', 'hack-01', 4 , NOW()), -- Judge 2 for AI Hackathon
('usr-part-01',  'hack-01', 3 , NOW()), -- Participant
('usr-part-02',  'hack-01', 3 , NOW()), -- Participant
('usr-part-03',  'hack-01', 3 , NOW());  -- Participant

-- ==========================================
-- 5. TEAMS
-- ==========================================
INSERT INTO team (id, name, invite_code, max_size, hackathon_id) VALUES
('team-01', 'ByteBusters', 'BYTE2026', 4, 'hack-01'),
('team-02', 'NeuralNet Ninjas', 'NINJA2026', 3, 'hack-01');

-- ==========================================
-- 6. TEAM MEMBERS
-- ==========================================
INSERT INTO team_member (team_id, user_id, is_lead, joined_at) VALUES
('team-01', 'usr-part-01', TRUE, NOW()),  -- Alice (Lead)
('team-01', 'usr-part-02', FALSE, NOW()), -- Bob
('team-02', 'usr-part-03', TRUE, NOW());   -- Charlie (Lead)

-- ==========================================
-- 7. EVALUATION CRITERIA
-- ==========================================
INSERT INTO criterion (id, hackathon_id, name, weight) VALUES
('crit-01', 'hack-01', 'Innovation & Originality', 0.35),
('crit-02', 'hack-01', 'Technical Complexity', 0.35),
('crit-03', 'hack-01', 'User Experience & Demo', 0.30);

-- ==========================================
-- 8. SUBMISSIONS
-- ==========================================
INSERT INTO submission (id, team_id, repository_url, demo_url, description, status , version , updated_at) VALUES
('sub-01', 'team-01', 'https://github.com/bytebusters/ai-copilot', 'https://youtu.be/demo1', 'AI-powered code optimization assistant.', 'SUBMITTED', 1 , NOW()),
('sub-02', 'team-02', 'https://github.com/ninjas/smart-vision', 'https://youtu.be/demo2', 'Real-time computer vision object tracking.', 'SUBMITTED', 1 , NOW());

-- ==========================================
-- 9. JUDGING SCORES
-- ==========================================
INSERT INTO score (judge_id, submission_id, criterion_id, score, feedback, updated_at) VALUES
-- Judge 1 scoring Team 1
('usr-judge-01', 'sub-01', 'crit-01', 9, 'Incredible innovation!', NOW()),
('usr-judge-01', 'sub-01', 'crit-02', 8, 'Solid architecture.', NOW()),
('usr-judge-01', 'sub-01', 'crit-03', 10, 'Flawless UI demonstration.', NOW()),
-- Judge 2 scoring Team 1
('usr-judge-02', 'sub-01', 'crit-01', 8, 'Great use of AI models.', NOW()),
('usr-judge-02', 'sub-01', 'crit-02', 9, 'Very complex query handling.', NOW()),
('usr-judge-02', 'sub-01', 'crit-03', 8, 'Good UI.', NOW());