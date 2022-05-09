import React from "react";
import TechSkillCard from "./techSkillCard";
import './App.css';
import javaLogo from './java.png';
import reactLogo from './react.svg';
import jsLogo from './js.png';
import tsLogo from './ts.svg';
import springbootLogo from './springboot.png';
import hibernateLogo from './hibernate.svg';
import mysqlLogo from './mysql.png';
import pgsqlLogo from './postgresql.svg';
import sqlserverLogo from './sqlserver.png';
import oracleLogo from './oracle.png';
import mongodbLogo from './mongodb.png';
import tomcatLogo from './tomcat.png';
import nodejsLogo from './nodejs.png';
import awsLogo from './aws.png';
import azureLogo from './azure.png';

const TechSkillsPanel = () => {
    return (
        <div className="techSkillContainer">
            <div className="section-title">Technical skills</div>
            <TechSkillCard
                logo={javaLogo}
                description="J2SE, J2EE, JFC, JDBC, Servlet, JSP, JSF, EJB, JAXP, JNDI, RMI"
            />
            <TechSkillCard
                logo={jsLogo}
                description="Javascript"
            />
            <TechSkillCard
                logo={tsLogo}
                description="Typescript"
            />
            <TechSkillCard
                logo={reactLogo}
                description="React, Redux"
            />
            <TechSkillCard
                logo={springbootLogo}
                description="Spring boot framework"
            />
            <TechSkillCard
                logo={hibernateLogo}
                description="Hibernate"
            />
            <TechSkillCard
                logo={mysqlLogo}
                description="My SQL"
            />
            <TechSkillCard
                logo={pgsqlLogo}
                description="Postgre SQL"
            />
            <TechSkillCard
                logo={sqlserverLogo}
                description="Microsoft SQL Server"
            />
            <TechSkillCard
                logo={oracleLogo}
                description="Oracle database"
            />
            <TechSkillCard
                logo={mongodbLogo}
                description="Mongo DB"
            />
            <TechSkillCard
                logo={tomcatLogo}
                description="Apache Tomcat"
            />
            <TechSkillCard
                logo={nodejsLogo}
                description="Node JS"
            />
            <TechSkillCard
                logo={awsLogo}
                description="EC2, S3, RDS, Dynamo DB, Elastic Cache"
            />
            <TechSkillCard
                logo={azureLogo}
                description="SQL Database, Service Bus, Storage, Logic app, Functions"
            />
        </div>
    );
}

export default TechSkillsPanel;