package data.access.dao.test;

import static org.junit.Assert.assertTrue;

import java.util.List;
import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import data.access.dao.impl.ProjectsDAO;
import data.model.def.ICompany;
import data.model.def.IProject;


public class ProjectDAOTest {

	Logger log = Logger.getLogger(ProjectDAOTest.class);

	private ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");;
	final private ProjectsDAO myprojectsDAO =  (ProjectsDAO) ctx.getBean("projectsDAOBean");;

	@BeforeClass
	public static void before(){

	}
	@Test
	public void getProjectsTest()
	{
		log.info("Test get projects starting");
		List<IProject> listProjects = myprojectsDAO.getListProjects();
		for(IProject c : listProjects){
			log.info(c);
		}
		assertTrue("failed to load customers", listProjects.size()   >= 0);
	}
	@Test
	public void getCompaniesTest()
	{
		log.info("Test get projects starting");
		try{
			List<ICompany> list1 = myprojectsDAO.getListCompanies();
			assertTrue("failed to load companies", list1.size()   >= 0);
		}
		catch(Exception ex){
			log.error(ex.getMessage());
			org.junit.Assert.fail();
		}
	}


}
