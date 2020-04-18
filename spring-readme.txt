CustomerMainApp
         CustomerService
                 CustomerDao
                          CustomerMap
                          
                          
                          
                          
                          
                          
                          
                          
                          BeanFactory (I)
                               |
                        ApplicationContext(I)
                               |
        ClassPathXMLApplicationXContext     AnnotationConfigApplicationContext
                               |
                       WebApplicationContext    



IOC

DI
  setter   -><property>
  constructor -><constructor-arg>
                          
                                                    
Spring Bean Life Cycle
==========================
1.Instantation
2.Dependency Injection
3.Initialization
4.Service
5.Destruction



Product
=======
productId :int
name:String
price:double

ProductMainApp
         ProductService
                 ProductDao
                         ProductMap
                         
                         
                         
Spring Bean Scope : singletone|prototype



Auto wiring
=============

It is a mechanism of delegating the responsibility of association of spring beans
to spring container.

<bean autowire="no|byName|byType|constructor">




Annotation Based configuration
=================================

@Component
@Controller
@Service
@Repository
@PostConstruct
@PreDestroy
@Configuration
@ComponentScan




<bean class="com.Employee"  id="e"> </bean>
						     @Component


@Controller						@Service				@Reposiotry      






Spring Web MVC
===============
                             Model                     View             Controller

JSP Model 1                  Java Bean                JSP                 JSP 

JSP Model 2                  Java Bean                JSP                 Servlet
                                                                         Ex. Struts1.x
                                                                             JSF1.x,JSF 2.x
                                                                             Spring Web MVC  


JSP Model 3                  Java Bean                JSP                 Filter
                                                                            Ex. Struts2.x   

JSP Model 4                  Java Bean                JSP                 Tag Handler
 
 













http://localhost:8080/spring-cms-mvc/rest/customers     : GET    =>RETURN ALL CUSTOMERS
http://localhost:8080/spring-cms-mvc/rest/customers/101 : GET    =>RETURN  CUSTOMER WITH ID 101
http://localhost:8080/spring-cms-mvc/rest/customers/101 : DELETE =>DELETE  CUSTOMER WITH ID 101
http://localhost:8080/spring-cms-mvc/rest/customers/101 : PUT/PATCH =>UPDATE  CUSTOMER WITH ID 101
http://localhost:8080/spring-cms-mvc/rest/customers     : POST =>ADD CUSTOMER





Step 1: Create a dynamic web project with name spring-cms-mvc and target runtime as apache tomcat 8.0


Step 2: Add all spring jar files in lib directory of the project


Step 3:Register FrontController (org.springframework.web.servlet.DispatcherServlet) in web.xml

Step 4:create spring configuration file with name [servlet-name]-servlet.xml in WEB-INF

<servlet>
  <servlet-name>spring</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  
  
  <load-on-startup>1</load-on-startup>
  </servlet>
  
  <servlet-mapping>
  <servlet-name>spring</servlet-name>
  <url-pattern>/spring/*</url-pattern>
  </servlet-mapping>
  
  
  <servlet>
  <servlet-name>rest</servlet-name>
  <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
  <init-param>
  <param-name>contextConfigLocation</param-name>
  <param-value>/WEB-INF/hello-servlet.xml</param-value>
  </init-param>
  
  <load-on-startup>1</load-on-startup>
  </servlet>
  
  <servlet-mapping>
  <servlet-name>rest</servlet-name>
  <url-pattern>/rest/*</url-pattern>
  </servlet-mapping>
  
  
Step 5: Create controllers with methods and map urls with method using @RequestMapping




@RequestMapping("/hello")
@Controller
class HelloController{

@RequestMapping(method=RequestMethod.GET)
public @ResponseBody String helloGET(){}
}

@RequestMapping(method=RequestMethod.DELETE)
public @ResponseBody String helloDELETE(){}
}

@RequestMapping(method=RequestMethod.PUT)
public @ResponseBody String helloPUT(){}
}

}             



@Controller +@ResponseBody => @RestController



@RequestMapping("/hello")
@RestController
class HelloController{

@RequestMapping(method=RequestMethod.GET)
public String helloGET(){}
}

@RequestMapping(method=RequestMethod.DELETE)
public  String helloDELETE(){}
}

@RequestMapping(method=RequestMethod.PUT)
public  String helloPUT(){}
}

}             
           
           
@RequestMapping(value="/hello",method=RequestMethod.GET)   =>   @GetMapping("/hello")
@RequestMapping(value="/hello",method=RequestMethod.POST)  =>   @PostMapping("/hello")
@RequestMapping(value="/hello",method=RequestMethod.PUT)   =>   @PutMapping("/hello")
@RequestMapping(value="/hello",method=RequestMethod.DELETE)=>   @DeleteMapping("/hello")
@RequestMapping(value="/hello",method=RequestMethod.PATCH) =>   @PatchMapping("/hello")

           
           
 @ResponseBody  =>Server to Client for converting Java Object into JSON
 @RequestBody   =>Client to Server for converting JSON Object to  Java
 
           
           
           
                          
                          
                          