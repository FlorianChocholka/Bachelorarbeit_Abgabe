# Cloud Security Wiki in Moodle

## Installing Moodle using Docker

To set up Moodle using Docker, please follow these steps:

1. Open your Bash (CMD/Powershell).
2. Execute the following commands one by one:

    ```bash
    docker network create moodle-network
    ```

    ```bash
    docker volume create --name mariadb_data
    ```

    ```bash
    docker run -d --name mariadb --env ALLOW_EMPTY_PASSWORD=yes --env MARIADB_USER=bn_moodle --env MARIADB_PASSWORD=bitnami --env MARIADB_DATABASE=bitnami_moodle --network moodle-network --volume mariadb_data:/bitnami/mariadb bitnami/mariadb:latest
    ```

    ```bash
    docker volume create --name moodle_data
    ```

    ```bash
    docker run -d --name moodle -p 8080:8080 -p 8443:8443 --env ALLOW_EMPTY_PASSWORD=yes --env MOODLE_DATABASE_USER=bn_moodle --env MOODLE_DATABASE_PASSWORD=bitnami --env MOODLE_DATABASE_NAME=bitnami_moodle --network moodle-network --volume moodle_data:/bitnami/moodle --volume moodledata_data:/bitnami/moodledata bitnami/moodle:latest
    ```

3. After successfully running the above commands, you can access your Moodle instance at `http://localhost:8080` or `https://localhost:8443`.

**Admin User:**
- Username: `user`
- Password: `bitnami`

**Note:** This Moodle instance is created using the Bitnami Docker image. For more information, visit the [GitHub Repository](https://github.com/bitnami/containers/tree/main/bitnami/moodle#how-to-use-this-image).

## Setting up the Cloud Security Wiki

### Creation

1. Create a Wiki activity in Moodle.
2. In the **Wiki name** field, enter: Cloud Security Wiki.
3. In the **Description** field, enter the following HTML code:

    ```html
    <p>Dieses Wiki dient als umfassende Ressource für alle <strong>Themen rund um
    die Sicherheit in der Cloud.</strong> Hier finden Sie Informationen über
    grundlegende Cloud Konzepte, Sicherheitsprinzipien, häufige Bedrohungen und
    Maßnahmen zur Risikominderung.</p>
    <p>Unsere Mission ist es, ein <strong>leicht zugängliches und gut strukturiertes
    Nachschlagewerk</strong> zu bieten, das sowohl Anfängern als auch erfahrenen
    Fachleuten hilft, die besten Praktiken für die Sicherheit in der Cloud zu
    verstehen und anzuwenden.</p>
    <p>Im <strong>unteren Bereich finden Sie die Links</strong>, um zu den
    verschiedenen Themenbereichen zu gelangen!</p>
    ```

### Main Page

On the main page, please add the following links:

    ```html
    <p>[[Einführung in die Cloud Modelle]]</p>
    <p>[[Deployment-Modelle in der Cloud]]</p>
    <p>[[Service Level Agreements]]</p>
    <p>[[Auswahl und Überprüfung von Cloud-Anbietern nach NCSC-Richtlinien]]</p>
    <p>[[Sichere Nutzung von SaaS-Anwendungen]]</p>
    ```

## Notes on Creating Pages in the Wiki

- Once the links on the main page are created, they will appear in red.
- Click on them once to create the corresponding pages.
- The codes for the individual HTML pages can be found in this folder.
- Insert the HTML contents in the text field. First, you need to switch to "Source Code" in the Tools.
