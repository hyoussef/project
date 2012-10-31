/**
 * 
 */
package data.access.dao.impl;

import java.util.List;

import data.access.dao.IDataDAO;
import data.mapper.IMapper;
import data.model.dto.AbbatoireDTO;
import data.model.dto.CustomerDTO;

/**
 * @author Nesrine Ben Mariem
 *
 */
public class DataDAO implements IDataDAO {

	
	private IMapper mapper;
	
	
	public AbbatoireDTO getAbbatoireBySiret(Long siret) {
		String schema = "NES";
		return mapper.getAbbatoireBySiret(schema, siret);
	}

	
	public List<CustomerDTO> getCustomers()
	{
		return mapper.getCustomers();
	}
 	
	/**
	 * @return the abbatoireMapper
	 */
	public IMapper getMapper() {
		return mapper;
	}

	/**
	 * @param abbatoireMapper the abbatoireMapper to set
	 */
	public void setMapper(IMapper abbatoireMapper) {
		this.mapper = abbatoireMapper;
	}

}
