import React from "react";

import WorkProjectCard from "./workProjectCard";
import './App.css';

const WorkExperiences = () => {
    const zanichelliProjectCVTT = 'I was in the developing team to building on the cloud <a href="http://tutor.scuola.zanichelli.it/creaverifiche" target="blank">the platform to create homework</a> for Zanichelli S.p.A. and another <a href="http://tutor.scuola.zanichelli.it/matematicatriennio" target="blank">tutoring platform to permit to students to do homework online</a>. The frontend of these websites are based on ReactJS and ReduxJS and the backend are based on some nodejs microservices.';
    return (
        <div className="workContainer">
            <div className="section-title">Work experiences</div>
            <WorkProjectCard
                company={"Mondora s.r.l. s.b."}
                dates="Nov 2019 to present"
                projectDescription="I am in the developing team of the project TS Digital for Teamsystem s.p.a. TS Digital is the main platform to manage all digital services. These services concern topics like electronic invoicing, digital signature, electronic payment, and services to help Italian companies to share informations with their business consultants."
                role="My contribution to the project concern to build a system that help to count the usage of each services by each customer to calculate how much customers have to pay. The system is built with some Springboot rest api and a frontend dashboard based on react. All the services are orchestrated by Kubernates and hosted on Azure cloud provider"
            />
            <WorkProjectCard
                company="Mondora s.r.l. s.b."
                dates="Nov 2017 - Nov 2019"
                projectDescription="I was in the developing team to build a platform for Teamsystem s.p.a, called TS Digital box, to help Italian companies to share documents and business infotmations with their accountant consultants."
                role="I have given my contribute to the project building some microservices based on springboot framework and to build the frontend based on react."
            />
            <WorkProjectCard
                company={"Mondora s.r.l. s.b."}
                dates="2015 to 2017"
                projectDescription={zanichelliProjectCVTT}
                role="My role was to help to buid the frontend and the backend."
            />
            <WorkProjectCard
                company="Mondora s.r.l. s.b."
                dates="2013 to 2014"
                projectDescription="I was in the developing team to build on the cloud the tutoring platform for Zanichelli S.p.A. (http://tutor.scuola.zanichelli.it). This is a web platform useful to teachers and students of high schools to manage home works of mathema- tics. Based on Play Framework and Backbone JS. The housing is on Amazon AWS and the provisioning is automatized using Puppet."
                role="I have given my contribute to the project building the backoffice management system based on GWT and the frontend developed with Play Framework and Backbone JS framework. The hardware infrastructure is hosted by Amazon AWS."
            />
            <WorkProjectCard
                company="Mondora s.r.l. s.b."
                dates="2012"
                projectDescription="Porting to Switchyard 0.7, JBPM 5.4 and Guvnor 5.5 for the deal management system of Aletti Gestielle SGR - Banco Popolare group"
                role="I was the advisor to do this porting"
            />
            <WorkProjectCard
                company="Mondora s.r.l. s.b."
                dates="2012"
                projectDescription="Lecturer of courses:<br>
                <ul>
                <li>Developing Java web applications with JBoss 7 and Servlet 3 for Infocamere (Padova, Bari)</li>
                <li>Administration of Glassfish 3 for New Amuser (Torino)</li>
                <li>Developing with Glassfish 3 for New Amuser (Torino)</li>
                <li>Introduction to Cloud Computing for Telecom Italia (Napoli, Roma, Bologna, Milano)</li>
                <li>Developing with Vaadin and Wicket for Infocamere (Padova)</li>
                <li>Introduction to GWT for Esselunga (Milano)</li></ul>"
                role=""
            />
            <WorkProjectCard
                company="Energee 3 s.r.l."
                dates="Oct 2011 to Sept 2012"
                projectDescription="- Maintenance of a web GIS application (IUGIS). The system is based on Weblogic 9 and the client is developed with Struts 2 and openlayers.<br> 
                - Maintenance of the Management System of Work of Regione Piemonte (SILP); development of the new profile system. This is a J2EE system based on Weblogic 9 and Oracle as database. The client is SWING based."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Energee 3 s.r.l."
                dates="Oct 2011 to Sept 2012"
                projectDescription="- Development of a new service for the Management System of Work of Regione Piemonte (SILP). MDD (Model Driven Development) technology; implementation: J2EE standard. The client is SWING based."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Mondora s.p.a."
                dates="Apr 2010 to Sept 2012"
                projectDescription="Development at B-Source S.A. (Lugano, CH) of a batch in java for the management of mass printing of documents to be sent to BSI Bank’s customers."
                role="Java developer"
            />
            <WorkProjectCard
                company="Mondora s.p.a."
                dates="Apr 2010 to Sept 2012"
                projectDescription="I was in the developing team of the project Developer 2.0: a web platform to build applications on a web browser."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Mondora s.p.a."
                dates="Apr 2010 to Sept 2012"
                projectDescription="I was in the developing team of the project Sense: a web platform for the management of the hardware and software re- sources deployed on a cloud provider like Amazon AWS. The system is based on JBOSS and the front-end is developed with GRAILS framework."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Sisge informatica s.p.a."
                dates="Apr 2009 to Sept 2009"
                projectDescription="I was in the developing team of Wave Group S.p.A. for the maintenance of the web site of SAI insurance to sell and manage insurance contracts. Website based on JSF technology deployed on IBM Websphere and Oracle ad database."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Engineering Ingegneria Informatica s.p.a."
                dates="Feb 2009 to Apr 2009"
                projectDescription="Development of a web application for the management of Societé Generale Security Services’ customers. The application is based on Tomcat and developed with JSF technology and MySQL as database."
                role="Freelancer J2EE developer"
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2009"
                projectDescription="Development for Wolters Kluwer Italia S.r.l. of a web application integrated with the web portal www.ipsoa.it. Application is based on tomcat and verity to index the documents."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2009"
                projectDescription="Development of crawler bot for www.jobcrawler.it, www.newscrawler.it, www.housecraw- ler.it, www.autocrawler.it, www.cvcrawler.it."
                role="Freelancer Java developer"
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2008 to 2009"
                projectDescription="Maintenance and improvement of JBOC project for NewCosma S.p.A. and BottegaVerde S.r.l. A BackOffice system for the management of 300 shops of the group in Italy and abroad. This is a J2EE system based on JBoss and Oracle."
                role="Team leader"
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2008 to 2009"
                projectDescription="JOBBE (Java Orders Best Binding Experience) project for New Cosma S.p.A. and BottegaVerde S.r.l.; A J2EE system based on JBOSS 4, with Oracle as data- base and swing based client for the management of orders coming from va- rious channels (telephone, fax, internet)."
                role="J2EE developer and team leader"
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2007 to 2008"
                projectDescription="For TecnetDati S.r.l. and Unicredit Bank in the developing team for AlfaMon project – a web application for the management of IT projects. A J2EE system based on Tomcat and DB2."
                role="J2EE developer and team leader. The frameworks used in this project are JSF, AJAX and AXIS.
                The application is interfaced via DFC (Documentum Foundation Classes) with the system of documents management (Documentum) of the customer.
                The reports are built using Crystal Reports XI, interfaced to the JSP of the application."
            />
            <WorkProjectCard
                company="Moonlab s.r.l."
                dates="2006"
                projectDescription="Development of PagineLibere.it. A System for publishing contents online without the knowledge of computer programming; A J2EE system based on JBOSS 4, Ajax and MYSQL."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="InRebus Technologies s.r.l."
                dates="Jun 2005 to Dec 2005"
                projectDescription="In the developing team of Unisys Italia S.p.A. to rebuild with Java the project “Media Desktop” (a tool for publishing houses in Italy and abroad) ; a J2EE system based on JBOSS 4 and ORACLE with swing based client."
                role="Freelancer J2EE developer"
            />
            <WorkProjectCard
                company="Sisge informatica s.p.a."
                dates="Oct 2004 to May 2005"
                projectDescription="Development of an application package for the management of medical reports in “Casa di cura Ambrosiana”. System built by using J2EE technology with JBOSS as application server, POSTGRESQL as database and a swing based client."
                role="Freelancer J2EE developer"
            />
            <WorkProjectCard
                company="Bottega verde s.r.l."
                dates="Jun 2004 to Sep 2004"
                projectDescription="In the developing team to build the new Back Office system for the management of 150 shops located in Italy; a J2EE system based on JBOSS, TOMCAT and ORACLE."
                role="Freelancer J2EE developer"
            />
            <WorkProjectCard
                company="Bottega verde s.r.l."
                dates="Jun 2004 to Sep 2004"
                projectDescription="JAVA base and J2EE technology teacher for the technical staff of Bottega Verde"
                role=""
            />
            <WorkProjectCard
                company="Progetto Inside s.r.l."
                dates="Jan 2002 to May 2004"
                projectDescription="Development and maintenance of an on line J2EE system, for the management of customers and their insurance contracts; system based on JBoss, Apache, Tomcat and MySql. Through this system about 20 operators are able to register, from different locations, insurance contracts of customers of about 100 car dealerships located in Italy."
                role="J2EE developer"
            />
            <WorkProjectCard
                company="Topgraf s.r.l."
                dates="Feb 2000 to Dec 2001"
                projectDescription="Spare parts catalogues and commercial catalogues; with Visual Basic and Microsoft Access technology and ASP technology for the on line catalogues."
                role="Software developer"
            />
            <WorkProjectCard
                company="Topgraf s.r.l."
                dates="Feb 2000 to Dec 2001"
                projectDescription="Development of a system for the management of audio-video post-production room activities; system developed with Visual Basic for the client side and with ASP technology with MS SQL Server for the server side. The system is used by the Cinecittà Studios in Rome."
                role="Backend Software developer"
            />
            <WorkProjectCard
                company="Topgraf s.r.l."
                dates="Aug 1999 to Feb 2000"
                projectDescription="Development of the web portal www.partiricambio.it for the management of spare parts catalogues; system based on Microsoft IIS, MS SQL Server and ASP technology."
                role="Internship as part of my thesis - “Diploma universitario in informatica”"
            />
        </div>
    );
}

export default WorkExperiences;