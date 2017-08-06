huidromApp.controller("mainController", ['$scope', function($scope) {
    var self = this;

    var onSelect = function(e) {
        console.log("Selected: " + $(e.item).children(".k-link").text());
    }

    self.init = function() {
        setTimeout(function() {
            $('#menuContentId').kendoMenu({
                select: onSelect
            });
        }, 500);

    }
}]);
huidromApp.controller("hudiWorkDemoCtrl", ['$scope', function($scope) {
    var self = this;

    self.init = function() {
        $("#workdemotabsid").kendoTabStrip({
            activate: onActivate,
            animation: {
                open: {
                    effects: "fadeIn"
                }
            },
            contentUrls: [
                './work.demo.angular.html',
                './work.demo.bootstrab.html',
                './work.demo.kendo.html'
            ]
        });
    }

    var onSelect = function(e) {
        console.log("Selected: " + $(e.item).children(".k-link").text());
    }

    var onActivate = function(e) {
        console.log("Activated: " + $(e.item).find("> .k-link").text());
        createChart();
    }

    var createChart = function() {
        $("#kendocontentchartid").kendoChart({
            title: {
                text: "ORGANISATIONAL Experience With HIGHLIGHTS!"
            },
            legend: {
                position: "bottom"
            },
            chartArea: {
                background: ""
            },
            seriesDefaults: {
                type: "line",
                style: "smooth"
            },
            series: [{
                name: "Jashyawanta Huidrom",
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            }],
            valueAxis: {
                labels: {
                    //format: "{0}"
                },
                line: {
                    visible: false
                },
                axisCrossingValue: -1
            },
            categoryAxis: {
                categories: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2013, 2015, 2016, 2017],
                majorGridLines: {
                    visible: false
                },
                labels: {
                    rotation: "auto"
                }
            },
            tooltip: {
                visible: true,
                format: "{0}",
                template: "#= series.name #: #= value #"
            }
        });
    }
}]);
huidromApp.controller("hudiProjectsCtrl", ['$scope', function($scope) {
    var self = this;

    self.init = function() {
        $("#projectspanelbarsid").kendoPanelBar({
            activate: onActivate,
            expandMode: 'single',
            animation: {
                open: {
                    effects: "fadeIn"
                }
            },
            dataSource: [
      {
        text: "Mahindra Satyam",
        contentUrl: './projects.details.html'               // Content URL to load within an item
      },
      {
        text: "Nihilent",
        contentUrl: './projects.details.html'               // Content URL to load within an item
      },
      {
        text: "Sungard Now part of FIS",
      // expanded: true, 
        contentUrl: './projects.details.html'              // Content URL to load within an item
      }      
    ]              
      
        });
    }

    var onSelect = function(e) {
        console.log("Selected: " + $(e.item).children(".k-link").text());
    }

    var projectSheetMap = {"Mahindra Satyam": "satyam" , "Nihilent" : "nihilent" ,"Sungard Now part of FIS": "sungard"};
    var onActivate = function(e) {
        var titleElement = this.select().find("> .k-link");
        console.log("Activated: " + titleElement.text());       
        createSheet(this.select(), projectSheetMap[titleElement.text()]);
    }

    var createSheet = function(activeElement, company){
        var projects = {sungard: [  
    ["Alinge Power", "Pune", "Aligne for Power Operations provides all the integrated information energy marketers, generation owners and load providers need for scheduling, along with superior tools for everything from contract compliance to settlement calculations, billing to invoicing, real-time generation dispatch to real-time curtailment management.",
    "Multiple energy trading, producers and consumers companies", "Energy US/Europe", "Solution Architech",6, "Spring,swing,angularjs,kendo,bootstrab,handsontable,css3 etc","Old project re-engineering with lattest technilogies and accomodating new market business scenarios"],
    ["Trax Payment Solution", "Pune/Mechelen", "SunGard's AvantGard Trax is a highly adaptive solution that can seamlessly integrate with existing cash management and back-office infrastructures. Multiple international payment format complient like SWIFT, SEPA", "Multiple Big Enterprises", "Payment Solution", "Solution Architect & Scrum Master",8,"ejb , hibernate, groovy, jboss, websphere, oracle, DB2 etc","Demanding role worked as Solution Architect and scrum master with continuous client support."]
   
    ],
    
    nihilent: [[
    "LATAM/AFRICA Fundamo EE implementation",
"(Pune)",
  "Various integration and extensions build on core product which is a mobile wallet and a mobile banking solution." ,
     "Fundamo"  ,
        "Mobile financial & Mobile Banking"  ,"PL DL Dev",
         20 , "ejb, hibernate, glassfish, oracle 11g, solaris  etc", "Receive Star of the quarter in the whole company."],
[
"Bkash Mobile Wallets",
"(Dhaka)", "Provide solution/refactoring and deployment restructuring for Bkash Bangladesh.",
 "Barclay",
 " Mobile wallets",
   "TC",  1 ,  "ejb, hibernate, jmeter, glassfish, oracle 11g, solaris etc",
     "Re-deployed and re-configured entire system during high traffic period. Fixing system crashed."],
[
"Fundamo EE Product",
"(Cape-Town)",
 "Develop the product which is the core that provide all the business functionalities for mobile wallet and mobile banking," ,
   "Visa Inc",
       "Mobile Financial & Mobile Banking" ,  "TL Dev", 9  , "ejb, hibernate, fit, selenium, cubic, jmeter, jbpm, groovy, ice faces, vaadin, glassfish, oracle 11g, solaris etc",
          "Leading multinational team."

],[
"Visa mobile money Implementation",
"(Pune) ",
 "Mobile wallet and financial solution for Visa Inc. Indian clients." , "Visa India" , "Mobile Financial & Mobile Banking",
  " PL DL Dev" ,4  , "ejb, hibernate, fit, selenium, cubic, jmeter, jbpm, groovy, ice faces, vaadin, glassfish, oracle 11g, solaris etc"  ,
  " Complex integration with Idea telecommunication"
],[

"PGAC",
"(Pune) ","The project enhances Jacada Workspace, providing a single user interface to all the critical applications and tools required by a call center representative/agent for effective customer interactions.",
" JACADA US " , "Insurance" ,  "TL Dev" ,4 ,"  Apache Beehive 1.0.2, Spring 2.5.5, Mysql 5, Google Simile, JUnit, Webservices etc",  "New technologies involve"

    ]],    
    satyam: [[

    "CSL Management System",
"(Pune)",
  "A flexible, Web-enabled system offering real-time inventory visibility in a secure, scalable web enabled environment.",
    "Knuehne + Nagel" ," Travel & Logistic ",  "Dev", 4,  " Java Script, JSP, web service , Struts 1.2, Hibernate 3.0, Eclipse  3.1  JBoss Server 4.0 ",
    "  Received Appreciation for implementing a complex implementation of report from client.  "],
    [
"India disbursement: check engine",
"(Pune)" ," This system deals entirely with the data used for this kind of monetary transaction. E.g. The system has sections like branch, bank, account, currency etc. Each such module provides the entire details of a particular section. This is an engine to check banking details before any disbursement is made. ","  JPMC Hong Kong","Banking" ,"Dev", 18 ," Java Script, JSTL, JSP Struts 1.2, Spring 3.0, Hibernate 3.2, Oracle 10g, Tomcat 5.5. ","  Continual modification of the requirements. Strict Timelines for the project. Increased Ownership and Responsibilities in the designated module."],
["NextGen-Trading Module",
"(Pune)"   , "It’s a Custodial and Brokerage System . Responsible for taking and executing Trade for different Assets. Tracks Companies assets. The information regarding Assets is comes from NextGen Database which is in synchronization with the CDS (Citco Data System). " ,  "CITCO",   "Financial" ,  "Dev", 200, "Java Script, JSP, Struts 1.2, Hibernate 3.0, Spring,10g,RAD, MS Excel","   Very complex UI module. Strict Timelines for the project. Learning of new Technology in short period required."],


["Online Product Catalog",
"(Pune)",   "It’s an online shopping portal. Same like flipkar.com " , "Satyam Computer Service Limited", "Retail",  "Dev", 11,"   Java Script, JSP, Spring 3.0, Hibernate 3.2 , struts 1.2, JSF , Tiles  MySQL6.0,Tomcat 5.5"  , "Got into TL Role"],
["Satyam Airways ",
"(Pune) " , "It’s the airlines ticketing portal. Same like goindigo.com"  ,"Satyam"  ,"Aviation" ,   "Dev" ,12  ," Java Script, JSP, JSTL,Spring 3.0 and Hibernate 3.2  MySql5.5 Jboss 4.0 "  ," Got into TL Role"], 
 ["Review and Escalation",
"(Hyderabad)", "It monitors every projects in Satyam. Perform review and provide measures for improvement. Handles escalation if required.",  "Satyam" , " Project review & escalation" , "Analyst", 5  , "Microsoft Sql Server MS Excel,(Ms office)", ""]
    ]

};

var content = activeElement.find("#projectsdetailscontentid");
//content.empty();

content.handsontable({
    data: projects[company],
    wordWrap: true,
    colWidths: [100,50,300,50,50,50,50,150,150],
    //width: 400,
   // height: 300,
    rowHeaders: true,
    colHeaders: ["Project", "Location", "Overview", "Client", "Domain","Role", "Team Size", "Technologies", "Challenges/Achievements"],
    contextMenu: true
});
    }}]);

huidromApp.controller("hudiSportsMaticCtrl", ['$scope', function($scope) {
    var self = this;

    var onSelect = function(e) {
        console.log("Selected: " + $(e.item).children(".k-link").text());
    }

    self.init = function() {
        setTimeout(function() {
             console.log(',,,,,,,,,,,,,,,');
        $('#sportsmaticcontentid').kendoSplitter({
            orientation: "vertical",
            panes: [{
                resizable: true,
                collapsible: true,
                scrollable: true,
                size: "50%"
            }, {
                resizable: true,
                collapsible: true,
                scrollable: true
            }]
        });

        $('#playersautioningsectionid').kendoSplitter({
            orientation: "horizontal",
            panes: [{
                resizable: true,
                collapsible: true,
                scrollable: true,
                size: "50%"
            }, {
                resizable: true,
                collapsible: true,
                scrollable: true
            }]
        });

        $('#playersallocationsectionid').kendoSplitter({
            orientation: "horizontal",
            panes: [{
                resizable: true,
                collapsible: true,
                scrollable: true,
                size: "50%"
            }, {
                resizable: true,
                collapsible: true,
                scrollable: true
            }]
        });

        

        


        });

    }
}]);
