package data.access.dao.test;

import java.util.List;

import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import static org.junit.Assert.*;
import data.access.dao.impl.DataDAO;
import data.model.dto.AbbatoireDTO;
import data.model.dto.CustomerDTO;
@Ignore
public class DataDAOTest {
	
	Logger log = Logger.getLogger(DataDAOTest.class);
	
	private ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");;
	private DataDAO mydataDAO =  (DataDAO) ctx.getBean("dataDAO");;
	
	@BeforeClass
	public static void before(){
	
	}
	
	
//	@Test
//	public void getAbbatoireBySiretTest()
//	{
//		log.info("test getAbbatoireBySiretTest starting");
//		AbbatoireDTO dto = mydataDAO.getAbbatoireBySiret( Long.valueOf("18007003900870") );
//		log.info(mydataDAO.toString());
//		
//		assertTrue("failed to load object correctly", dto.getSiret().compareTo( Long.valueOf("18007003900870") ) == 0  );
//		
//	}
	
	@Test
	public void getCustomersTest()
	{
		log.info("test get Customers starting");
		List<CustomerDTO> listCustomer = mydataDAO.getCustomers();
		log.info(mydataDAO);
		
		for(CustomerDTO c : listCustomer)
			log.info(c);
		
		assertTrue("failed to load customers", listCustomer.size()   > 0);
		
	}
	
	

}
