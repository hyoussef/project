package data.access.dao.test;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import data.access.dao.impl.ProjectsDAO;
import data.model.dto.ProjectDTO;

public class ProjectDAOTest {
	
	Logger log = Logger.getLogger(ProjectDAOTest.class);
	
	private ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");;
	final private ProjectsDAO myprojectsDAO =  (ProjectsDAO) ctx.getBean("projectsDAOBean");;
	
	@BeforeClass
	public static void before(){
	
	}
	
//getListProjects
	@Test
	public void getProjectsTest()
	{
		log.info("Test get projects starting");
		
		List<ProjectDTO> listProjects = myprojectsDAO.getListProjects();
		
		
		for(ProjectDTO c : listProjects)
			log.info(c);
		
		assertTrue("failed to load customers", listProjects.size()   >= 0);
		
	}
	

}
